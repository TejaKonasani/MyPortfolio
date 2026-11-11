'use client';

import { useEffect, useRef } from 'react';

/**
 * Three.js hero 3D scene (Dark Mode Adapted):
 *  - Glossy dark-metallic TorusKnot reflecting lime and orange point lights
 *  - Subtle concentric wireframe icosahedron in lime/orange
 *  - Orbiting glowing lime sphere and sky-blue octahedron
 *  - Mouse parallax easing
 *  - IntersectionObserver pauses off-screen, pixel ratio capped at 2
 *  - prefers-reduced-motion static render, full resource disposal on unmount
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let raf = 0;
    let observer: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;

    const init = async () => {
      try {
        const THREE = await import('three');

        const width = mount.clientWidth;
        const height = mount.clientHeight;
        if (width === 0 || height === 0) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 7.2);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.domElement.style.display = 'block';
        mount.appendChild(renderer.domElement);

        // Lighting: dark ambient + vibrant lime & orange point lights
        const ambient = new THREE.AmbientLight(0x202024, 1.2);
        scene.add(ambient);

        const limeLight = new THREE.PointLight(0xc8f542, 3.8, 18);
        limeLight.position.set(-3.5, 3.5, 4.5);
        scene.add(limeLight);

        const orangeLight = new THREE.PointLight(0xff6a3d, 4.2, 18);
        orangeLight.position.set(3.5, -3, 4);
        scene.add(orangeLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
        keyLight.position.set(1, 6, 7);
        scene.add(keyLight);

        // Glossy dark-metallic torus knot
        const knotGeometry = new THREE.TorusKnotGeometry(1.08, 0.32, 220, 32);
        const knotMaterial = new THREE.MeshStandardMaterial({
          color: 0x18181d,
          roughness: 0.18,
          metalness: 0.88,
        });
        const knot = new THREE.Mesh(knotGeometry, knotMaterial);
        scene.add(knot);

        // Subtle rotating wireframe icosahedron accent (lime with slight transparency)
        const wireGeometry = new THREE.IcosahedronGeometry(1.85, 1);
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: 0xc8f542,
          wireframe: true,
          transparent: true,
          opacity: 0.18,
        });
        const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
        scene.add(wireMesh);

        // Orbiters: lime sphere + sky octahedron
        const sphereGeometry = new THREE.SphereGeometry(0.3, 48, 48);
        const sphereMaterial = new THREE.MeshStandardMaterial({
          color: 0xc8f542,
          emissive: 0xc8f542,
          emissiveIntensity: 0.3,
          roughness: 0.25,
          metalness: 0.4,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const octaGeometry = new THREE.OctahedronGeometry(0.32);
        const octaMaterial = new THREE.MeshStandardMaterial({
          color: 0x7da6ff,
          emissive: 0x7da6ff,
          emissiveIntensity: 0.25,
          roughness: 0.25,
          metalness: 0.4,
          flatShading: true,
        });
        const octa = new THREE.Mesh(octaGeometry, octaMaterial);
        scene.add(octa);

        // Mouse reaction (eased parallax)
        const mouse = { x: 0, y: 0 };
        const eased = { x: 0, y: 0 };
        const onPointerMove = (e: PointerEvent) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener('pointermove', onPointerMove, { passive: true });

        // Reduced motion check
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const clock = { t: 0 };
        const frame = () => {
          if (disposed) return;
          clock.t += 0.016;

          eased.x += (mouse.x - eased.x) * 0.05;
          eased.y += (mouse.y - eased.y) * 0.05;

          if (!reduceMotion) {
            knot.rotation.x = clock.t * 0.35 + eased.y * 0.4;
            knot.rotation.y = clock.t * 0.48 + eased.x * 0.55;

            wireMesh.rotation.x = -clock.t * 0.18 + eased.y * 0.2;
            wireMesh.rotation.y = -clock.t * 0.22 + eased.x * 0.25;
          } else {
            knot.rotation.x = eased.y * 0.25;
            knot.rotation.y = eased.x * 0.35;
            wireMesh.rotation.x = eased.y * 0.15;
            wireMesh.rotation.y = eased.x * 0.15;
          }

          const a = clock.t * 0.85;
          sphere.position.set(Math.cos(a) * 2.5, Math.sin(a * 1.3) * 0.7, Math.sin(a) * 2.5);
          sphere.rotation.x = clock.t * 0.8;
          sphere.rotation.y = clock.t * 0.6;

          const b = clock.t * 0.68 + Math.PI;
          octa.position.set(Math.cos(b) * 2.9, Math.sin(b * 1.1) * 0.9, Math.sin(b) * 2.9);
          octa.rotation.x = clock.t * 0.7;
          octa.rotation.y = clock.t * 0.9;

          renderer.render(scene, camera);
          if (!reduceMotion) raf = requestAnimationFrame(frame);
        };
        frame();

        // Pause rendering when off-screen
        observer = new IntersectionObserver(
          ([entry]) => {
            if (disposed) return;
            cancelAnimationFrame(raf);
            if (entry.isIntersecting) {
              raf = requestAnimationFrame(frame);
            }
          },
          { threshold: 0 }
        );
        observer.observe(mount);

        // Resize handler
        const onResize = () => {
          const w = mount.clientWidth;
          const h = mount.clientHeight;
          if (w === 0 || h === 0) return;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.setSize(w, h);
          if (reduceMotion) renderer.render(scene, camera);
        };
        window.addEventListener('resize', onResize);

        cleanup = () => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('resize', onResize);
          cancelAnimationFrame(raf);
          if (observer) observer.disconnect();
          knotGeometry.dispose();
          knotMaterial.dispose();
          wireGeometry.dispose();
          wireMaterial.dispose();
          sphereGeometry.dispose();
          sphereMaterial.dispose();
          octaGeometry.dispose();
          octaMaterial.dispose();
          renderer.dispose();
          if (renderer.domElement.parentElement === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.warn('HeroScene: 3D scene unavailable, continuing without it.', err);
      }
    };

    init();

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-60 md:opacity-100 transition-opacity"
    />
  );
}
