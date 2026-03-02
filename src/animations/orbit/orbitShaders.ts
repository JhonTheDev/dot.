export const orbitVertexShader = `
uniform float uTime;
uniform float uWaveAmplitude;

attribute float aOffset;
attribute float aSpeed;
attribute float aColorIdx;

varying vec2 vUv;
varying float vSpeed;
varying float vOffset;
varying float vColorIdx;

void main() {
  vUv = uv;
  vSpeed = aSpeed;
  vOffset = aOffset;
  vColorIdx = aColorIdx;

  vec3 pos = position;
  float wave = sin(uv.x * 10.0 + uTime * 2.0 + aOffset);
  pos.z += wave * uWaveAmplitude;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const orbitFragmentShader = `
uniform float uTime;
uniform float uGlobalSpeed;
uniform float uTrailLength;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;

varying vec2 vUv;
varying float vSpeed;
varying float vOffset;
varying float vColorIdx;

void main() {
  float time = uTime * uGlobalSpeed * vSpeed;
  float trailPos = fract(vUv.x - time + vOffset);

  float minLen = 0.001;
  float effectiveLength = mix(minLen, 0.8, uTrailLength);

  float trail = smoothstep(1.0 - effectiveLength, 1.0, trailPos);
  float power = mix(1.0, 3.0, uTrailLength);
  trail = pow(trail, power);

  float edgeFade = smoothstep(0.0, 0.05, vUv.x) * (1.0 - smoothstep(0.95, 1.0, vUv.x));

  vec3 finalColor;
  if (vColorIdx < 0.5) finalColor = uColor1;
  else if (vColorIdx < 1.5) finalColor = uColor2;
  else if (vColorIdx < 2.5) finalColor = uColor3;
  else finalColor = uColor4;

  finalColor = mix(finalColor, vec3(1.0), trail * 0.75);
  float alpha = trail * edgeFade;

  gl_FragColor = vec4(finalColor, alpha);
}
`;
