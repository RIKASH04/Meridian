'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

function HeadModel({ mouseRef }) {
  // Load the 3D human head model
  const { scene } = useGLTF('/LeePerrySmith.glb');
  const headRef = useRef();

  useFrame((state) => {
    if (!headRef.current) return;
    
    // Read global mouse coordinates from reference
    const { x, y } = mouseRef.current;
    
    // Max limits for rotation (looking around)
    const targetX = x * 0.5; // turn left/right
    const targetY = y * 0.35; // tilt up/down
    
    // Smoothly interpolate current rotation to match mouse
    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.06);
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.06);
    
    // Subtle ambient floating animation (organic movement)
    const time = state.clock.getElapsedTime();
    headRef.current.position.y = -0.15 + Math.sin(time * 1.5) * 0.12;
    headRef.current.rotation.z = Math.sin(time * 0.5) * 0.02;
  });

  // Apply futuristic chrome metallic material to the head mesh
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#9333ea'), // rich purple chrome base
          metalness: 0.85,
          roughness: 0.18,
          emissive: new THREE.Color('#3b0764'), // deep violet base glow
          emissiveIntensity: 0.2,
        });
      }
    });
  }, [scene]);

  return (
    <group ref={headRef}>
      <Center>
        <primitive object={scene} scale={11} />
      </Center>
    </group>
  );
}

// Simple wireframe cube loader while model loads
function FallbackLoader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8EA0FF" wireframe />
    </mesh>
  );
}

export default function ThreeHead() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse coords relative to viewport (-1 to 1)
      const mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      mouseRef.current = { x: mouseX, y: mouseY };
    };

    const handleMouseLeave = () => {
      // Return to center when mouse leaves window
      mouseRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 22], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.6} />
        {/* Lights setup to create premium glass highlights and reflections */}
        <directionalLight position={[5, 5, 5]} intensity={3.5} color="#d8b4fe" />
        <directionalLight position={[-5, 5, -5]} intensity={2.5} color="#38bdf8" />
        <pointLight position={[0, -2, 3]} intensity={3} color="#ec4899" />
        
        <React.Suspense fallback={<FallbackLoader />}>
          <HeadModel mouseRef={mouseRef} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

// Preload assets
useGLTF.preload('/LeePerrySmith.glb');
