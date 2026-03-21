import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WaveBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = mountRef.current!.clientWidth;
    const height = mountRef.current!.clientHeight;

    const scene = new THREE.Scene();

    // 🎥 Flat camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 40, 0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current!.appendChild(renderer.domElement);

    // 🌊 Grid
    const size = 120;
    const divisions = 150;

    const geometry = new THREE.PlaneGeometry(size, size, divisions, divisions);
    geometry.rotateX(-Math.PI / 2);

    // 🎲 Random attribute
    const count = geometry.attributes.position.count;
    const randomness = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      randomness[i] = Math.random();
    }

    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randomness, 1));

    // 🎛️ Shader
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,

      uniforms: {
        uTime: { value: 0 },

        uPointSize: { value: 0.5 },
        uColor: { value: new THREE.Color(1, 1, 1) },
        uOpacity: { value: 0.3 },
        uIntensity: { value: 0.5 },

        uHeight: { value: 1.2 },
        uScale: { value: 0.08 },
        uSpeed: { value: 0.1 },
      },

      vertexShader: `
        uniform float uTime;
        uniform float uPointSize;
        uniform float uHeight;
        uniform float uScale;
        uniform float uSpeed;

        attribute float aRandom;

        varying float vHeight;
        varying float vFade;

        // Hash
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        // Smooth noise
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        // fBm
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;

          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }

          return value;
        }

        void main() {
          vec3 pos = position;

          float angle = uTime * 0.05;
          mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));

          vec2 p = rot * (pos.xz * uScale);

          float n = 0.0;

          n += fbm(p + vec2(0.0, uTime * uSpeed));
          n += fbm(p * 1.3 + vec2(uTime * uSpeed * 0.6, 0.0));
          n += fbm(p * 0.7 + vec2(-uTime * uSpeed * 0.4, uTime * uSpeed * 0.3));

          n /= 3.0;

          // center [-1,1]
          n = n * 2.0 - 1.0;

          pos.y = n * uHeight;

          vHeight = n;

          float baseFade = smoothstep(-0.4, 0.4, n);

          float pulse = 0.9 + 0.1 * sin(uTime * 0.5 + aRandom * 10.0);

          vFade = baseFade * pulse;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          gl_PointSize = uPointSize * (300.0 / -mvPosition.z);
        }
      `,

      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uIntensity;

        varying float vHeight;
        varying float vFade;

        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);

          if (dist > 0.5) discard;

          float circle = smoothstep(0.5, 0.2, dist);

          float opacity = vFade * circle;

          // fade out when going "down"
          opacity *= smoothstep(-0.3, 0.1, vHeight);

          vec3 color = uColor * uIntensity;

          gl_FragColor = vec4(color, opacity * uOpacity);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const w = mountRef.current!.clientWidth;
      const h = mountRef.current!.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="absolute inset-0 z-0" ref={mountRef} />;
}