'use client';
import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const groupRef = useRef();
  const { scene } = useGLTF('/hoodie-person.glb');
  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Floating + waving animation
  useFrame(() => {
    if (!groupRef.current) return;
    const t = clock.current.getElapsedTime();

    // Gentle floating up/down
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;

    // Subtle body sway (simulates waving energy)
    groupRef.current.rotation.z = Math.sin(t * 1.5) * 0.06;
    groupRef.current.rotation.x = Math.sin(t * 0.7) * 0.03;

    // Slow idle Y rotation
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef} scale={1.8} position={[0, -1.2, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function FallbackLoader() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.5, 0.15, 16, 32]} />
      <meshStandardMaterial color="#5E17EB" emissive="#5E17EB" emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function AboutModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        color="#ffffff"
      />
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.4}
        color="#8EA0FF"
      />
      <pointLight position={[0, -2, 3]} intensity={0.5} color="#5E17EB" />

      <Suspense fallback={<FallbackLoader />}>
        <Model />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={6}
          blur={2.5}
          far={4}
          color="#5E17EB"
        />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}

// Preload the model
useGLTF.preload('/hoodie-person.glb');
