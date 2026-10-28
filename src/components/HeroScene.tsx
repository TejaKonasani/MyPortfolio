'use client';

import { useEffect, useRef } from 'react';

/**
 * Three.js hero scene:
 *  - glossy solid orange TorusKnot (MeshStandardMaterial, roughness 0.28)
 *  - a lime sphere and a sky-blue octahedron orbiting it
 *  - ambient light + one directional light, transparent canvas
 *  - continuous rotation + mouse reaction
 *  - pixel ratio capped at 2, paused off-screen, disposed on unmount,
 *    wrapped in try/catch so the page still works without WebGL.
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

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 7);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.domElement.style.display = 'block';
        mount.appendChild(renderer.domElement);

        // Lights: ambient + one directional
        const ambient = new THREE.AmbientLight(0xffffff, 0.85);
        scene.add(ambient);
        const directional = new THREE.DirectionalLight(0xffffff, 1.6);
        directional.position.set(4, 6, 8);
        scene.add(directional);

        // Glossy orange torus knot
        const knotGeometry = new THREE.TorusKnotGeometry(1.05, 0.34, 220, 32);
        const knotMaterial = new THREE.MeshStandardMaterial({
          color: 0xff4d1f,
          roughness: 0.28,
          metalness: 0.35,
        });
        const knot = new THREE.Mesh(knotGeometry, knotMaterial);
        scene.add(knot);

        // Orbiters: lime sphere + sky octahedron
        const sphereGeometry = new THREE.SphereGeometry(0.32, 48, 48);
        const sphereMaterial = new THREE.MeshStandardMaterial({
          color: 0xc8f13c,
          roughness: 0.35,
          metalness: 0.2,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const octaGeometry = new THREE.OctahedronGeometry(0.34);
        const octaMaterial = new THREE.MeshStandardMaterial({
          color: 0x8fb8ff,
          roughness: 0.35,
          metalness: 0.2,
          flatShading: true,
        });
        const octa = new THREE.Mesh(octaGeometry, octaMaterial);
        scene.add(octa);

        // Mouse reaction (eased)
        const mouse = { x: 0, y: 0 };
        const eased = { x: 0, y: 0 };
        const onPointerMove = (e: PointerEvent) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener('pointermove', onPointerMove, { passive: true });

        // Reduced motion: render a single static frame, no auto-rotation
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const clock = { t: 0 };
        const frame = () => {
          if (disposed) return;
          clock.t += 0.016;

          eased.x += (mouse.x - eased.x) * 0.05;
          eased.y += (mouse.y - eased.y) * 0.05;

          if (!reduceMotion) {
            knot.rotation.x = clock.t * 0.35 + eased.y * 0.5;
            knot.rotation.y = clock.t * 0.5 + eased.x * 0.7;
          } else {
            knot.rotation.x = eased.y * 0.3;
            knot.rotation.y = eased.x * 0.4;
          }

          const a = clock.t * 0.9;
          sphere.position.set(Math.cos(a) * 2.5, Math.sin(a * 1.3) * 0.7, Math.sin(a) * 2.5);
          sphere.rotation.x = clock.t * 0.8;
          sphere.rotation.y = clock.t * 0.6;

          const b = clock.t * 0.7 + Math.PI;
          octa.position.set(Math.cos(b) * 2.9, Math.sin(b * 1.1) * 0.9, Math.sin(b) * 2.9);
          octa.rotation.x = clock.t * 0.7;
          octa.rotation.y = clock.t * 0.9;

          renderer.render(scene, camera);
          if (!reduceMotion) raf = requestAnimationFrame(frame);
        };
        frame();

        // Pause rendering when the hero is off-screen
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

        // Resize
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
        // WebGL unavailable or any failure: page keeps working without the scene.
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
      className="absolute inset-0 w-full h-full"
    />
  );
}