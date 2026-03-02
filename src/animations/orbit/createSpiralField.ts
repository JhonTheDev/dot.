import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { orbitFragmentShader, orbitVertexShader } from './orbitShaders';
import type { OrbitConfig, OrbitPalette } from './orbitConfig';

export type SpiralField = {
  mesh: THREE.Mesh;
  material: THREE.ShaderMaterial;
  dispose: () => void;
};

const getSpiralCurve = (radius: number, turns: number, randomOffset: number): THREE.CatmullRomCurve3 => {
  const points: THREE.Vector3[] = [];
  const divisions = 200;

  for (let index = 0; index <= divisions; index += 1) {
    const t = index / divisions;
    const angle = t * Math.PI * 2 * turns + randomOffset;
    const radialDistance = radius * (1 - t);
    const x = radialDistance * Math.cos(angle);
    const y = radialDistance * Math.sin(angle);
    const z = Math.sin(t * 12 + randomOffset) * 0.5 * (1 - t);
    points.push(new THREE.Vector3(x, y, z));
  }

  return new THREE.CatmullRomCurve3(points, false, 'centripetal');
};

export const createSpiralField = (config: OrbitConfig, palette: OrbitPalette): SpiralField => {
  const geometries: THREE.BufferGeometry[] = [];

  for (let index = 0; index < config.count; index += 1) {
    const randomAngle = Math.random() * Math.PI * 2;
    const curve = getSpiralCurve(config.radius, config.turns, randomAngle);
    const geometry = new THREE.TubeGeometry(
      curve,
      config.tubularSegments,
      config.tubeRadius,
      config.radialSegments,
      false,
    );

    const positionCount = geometry.attributes.position.count;
    const randomOffsets = new Float32Array(positionCount);
    const speeds = new Float32Array(positionCount);
    const colors = new Float32Array(positionCount);

    const offsetValue = Math.random() * 100;
    const speedValue = 0.8 + Math.random() * 0.4;
    const colorType = Math.floor(Math.random() * 4);

    for (let attributeIndex = 0; attributeIndex < positionCount; attributeIndex += 1) {
      randomOffsets[attributeIndex] = offsetValue;
      speeds[attributeIndex] = speedValue;
      colors[attributeIndex] = colorType;
    }

    geometry.setAttribute('aOffset', new THREE.BufferAttribute(randomOffsets, 1));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('aColorIdx', new THREE.BufferAttribute(colors, 1));
    geometries.push(geometry);
  }

  const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uGlobalSpeed: { value: config.speed },
      uTrailLength: { value: config.trailLength },
      uWaveAmplitude: { value: config.waveAmplitude },
      uColor1: { value: new THREE.Color(palette.color1) },
      uColor2: { value: new THREE.Color(palette.color2) },
      uColor3: { value: new THREE.Color(palette.color3) },
      uColor4: { value: new THREE.Color(palette.color4) },
    },
    vertexShader: orbitVertexShader,
    fragmentShader: orbitFragmentShader,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  const mesh = new THREE.Mesh(mergedGeometry, material);
  mesh.rotation.x = config.rotateX;
  mesh.rotation.y = config.rotateY;
  mesh.position.x = config.positionX;
  mesh.position.y = config.positionY;

  return {
    mesh,
    material,
    dispose: () => {
      mergedGeometry.dispose();
      material.dispose();
    },
  };
};
