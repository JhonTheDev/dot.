export type OrbitPalette = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  background: string;
};

export type OrbitConfig = {
  count: number;
  radius: number;
  turns: number;
  tubeRadius: number;
  tubularSegments: number;
  radialSegments: number;
  speed: number;
  trailLength: number;
  waveAmplitude: number;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  fogDensity: number;
  rotateX: number;
  rotateY: number;
  positionX: number;
  positionY: number;
  pointerInfluence: number;
  pointerLerp: number;
  maxPixelRatio: number;
  materialOpacity: number;
};

export type OrbitMode = {
  viewport: 'mobile' | 'tablet' | 'desktop';
  reducedMotion: boolean;
};

export const getOrbitConfig = ({ viewport, reducedMotion }: OrbitMode): OrbitConfig => {
  if (reducedMotion) {
    return {
      count: 22,
      radius: 5.6,
      turns: 2.4,
      tubeRadius: 0.006,
      tubularSegments: 150,
      radialSegments: 8,
      speed: 0.008,
      trailLength: 0.08,
      waveAmplitude: 0.0015,
      bloomStrength: 0,
      bloomRadius: 0,
      bloomThreshold: 0,
      fogDensity: 0.033,
      rotateX: -1.05,
      rotateY: -0.35,
      positionX: 0.12,
      positionY: 0.6,
      pointerInfluence: 0,
      pointerLerp: 0,
      maxPixelRatio: 1.1,
      materialOpacity: 0.32,
    };
  }

  if (viewport === 'mobile') {
    return {
      count: 28,
      radius: 5.8,
      turns: 2.5,
      tubeRadius: 0.006,
      tubularSegments: 160,
      radialSegments: 8,
      speed: 0.009,
      trailLength: 0.07,
      waveAmplitude: 0.0016,
      bloomStrength: 0,
      bloomRadius: 0,
      bloomThreshold: 0,
      fogDensity: 0.034,
      rotateX: -1.02,
      rotateY: -0.3,
      positionX: 0.08,
      positionY: 0.62,
      pointerInfluence: 0,
      pointerLerp: 0,
      maxPixelRatio: 1.15,
      materialOpacity: 0.42,
    };
  }

  if (viewport === 'tablet') {
    return {
      count: 42,
      radius: 6.2,
      turns: 2.8,
      tubeRadius: 0.006,
      tubularSegments: 190,
      radialSegments: 9,
      speed: 0.013,
      trailLength: 0.1,
      waveAmplitude: 0.0025,
      bloomStrength: 0.08,
      bloomRadius: 0.05,
      bloomThreshold: 0.14,
      fogDensity: 0.038,
      rotateX: -1.06,
      rotateY: -0.36,
      positionX: 0.2,
      positionY: 0.66,
      pointerInfluence: 0,
      pointerLerp: 0,
      maxPixelRatio: 1.25,
      materialOpacity: 0.56,
    };
  }

  return {
    count: 72,
    radius: 7,
    turns: 3,
    tubeRadius: 0.007,
    tubularSegments: 260,
    radialSegments: 12,
    speed: 0.019,
    trailLength: 0.14,
    waveAmplitude: 0.003,
    bloomStrength: 0.2,
    bloomRadius: 0.08,
    bloomThreshold: 0.1,
    fogDensity: 0.042,
    rotateX: -1.1,
    rotateY: -0.42,
    positionX: 0.48,
    positionY: 0.74,
    pointerInfluence: 0.16,
    pointerLerp: 0.055,
    maxPixelRatio: 1.35,
    materialOpacity: 0.72,
  };
};

export const getFallbackPalette = (): OrbitPalette => ({
  color1: 'hsl(330 2% 30%)',
  color2: 'hsl(52 60% 36%)',
  color3: 'hsl(300 0% 45%)',
  color4: 'hsl(0 0% 12%)',
  background: 'hsl(0 0% 1%)',
});
