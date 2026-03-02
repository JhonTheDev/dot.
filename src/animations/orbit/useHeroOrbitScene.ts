import { useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { createSpiralField } from './createSpiralField';
import { getFallbackPalette, getOrbitConfig, type OrbitPalette } from './orbitConfig';

type UseHeroOrbitSceneOptions = {
  container: HTMLDivElement | null;
  viewport: 'mobile' | 'tablet' | 'desktop';
  reducedMotion: boolean;
};

const readCssVariable = (styles: CSSStyleDeclaration, name: string, fallback: string): string => {
  const value = styles.getPropertyValue(name).trim();
  return value.length > 0 ? value : fallback;
};

const getBrandPalette = (): OrbitPalette => {
  const fallback = getFallbackPalette();
  const rootElement = document.documentElement;
  const styles = getComputedStyle(rootElement);

  return {
    color1: readCssVariable(styles, '--highlight', fallback.color1),
    color2: readCssVariable(styles, '--primary', fallback.color2),
    color3: readCssVariable(styles, '--text-muted', fallback.color3),
    color4: readCssVariable(styles, '--bg-light', fallback.color4),
    background: readCssVariable(styles, '--bg-dark', fallback.background),
  };
};

export const useHeroOrbitScene = ({ container, viewport, reducedMotion }: UseHeroOrbitSceneOptions): void => {
  useEffect(() => {
    if (!container) {
      return;
    }

    const config = getOrbitConfig({ viewport, reducedMotion });
    const palette = getBrandPalette();

    const scene = new THREE.Scene();
    const backgroundColor = new THREE.Color(palette.background);
    scene.fog = new THREE.FogExp2(backgroundColor, config.fogDensity);

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });

    const pixelRatio = Math.min(window.devicePixelRatio || 1, config.maxPixelRatio);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(renderer.domElement);

    const field = createSpiralField(config, palette);
    field.material.opacity = config.materialOpacity;
    scene.add(field.mesh);

    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      config.bloomStrength,
      config.bloomRadius,
      config.bloomThreshold,
    );
    bloomPass.threshold = config.bloomThreshold;
    bloomPass.strength = config.bloomStrength;
    bloomPass.radius = config.bloomRadius;

    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.uniforms.resolution.value.set(1 / (width * pixelRatio), 1 / (height * pixelRatio));

    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(pixelRatio);
    composer.setSize(width, height);
    composer.addPass(renderPass);

    const shouldUseComposer = !reducedMotion && config.bloomStrength > 0.05;
    if (shouldUseComposer) {
      composer.addPass(bloomPass);
      composer.addPass(fxaaPass);
    }

    let pointerTargetX = 0;
    let pointerTargetY = 0;
    const enablePointerParallax = viewport === 'desktop' && !reducedMotion;

    const handlePointerMove = (event: PointerEvent): void => {
      if (!enablePointerParallax) {
        return;
      }

      const normalizedX = event.clientX / window.innerWidth;
      const normalizedY = event.clientY / window.innerHeight;
      pointerTargetX = (normalizedX - 0.5) * 2;
      pointerTargetY = (normalizedY - 0.5) * 2;
    };

    let isTabVisible = !document.hidden;
    const handleVisibilityChange = (): void => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = (): void => {
      const nextWidth = Math.max(container.clientWidth, 1);
      const nextHeight = Math.max(container.clientHeight, 1);
      const nextPixelRatio = Math.min(window.devicePixelRatio || 1, config.maxPixelRatio);

      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(nextPixelRatio);
      renderer.setSize(nextWidth, nextHeight);
      composer.setPixelRatio(nextPixelRatio);
      composer.setSize(nextWidth, nextHeight);
      fxaaPass.uniforms.resolution.value.set(
        1 / (nextWidth * nextPixelRatio),
        1 / (nextHeight * nextPixelRatio),
      );
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = (): void => {
      rafId = window.requestAnimationFrame(animate);

      if (!isTabVisible) {
        return;
      }

      const elapsedTime = clock.getElapsedTime();
      field.material.uniforms.uTime.value = elapsedTime;
      field.material.uniforms.uGlobalSpeed.value = config.speed;

      if (enablePointerParallax) {
        const targetRotationX = config.rotateX + pointerTargetY * config.pointerInfluence * 0.65;
        const targetRotationY = config.rotateY + pointerTargetX * config.pointerInfluence;
        field.mesh.rotation.x = THREE.MathUtils.lerp(field.mesh.rotation.x, targetRotationX, config.pointerLerp);
        field.mesh.rotation.y = THREE.MathUtils.lerp(field.mesh.rotation.y, targetRotationY, config.pointerLerp);
      }

      if (shouldUseComposer) {
        composer.render();
        return;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      scene.remove(field.mesh);
      field.dispose();

      composer.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [container, viewport, reducedMotion]);
};
