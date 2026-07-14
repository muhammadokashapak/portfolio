import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Text, Icosahedron, TorusKnot, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// A single floating geometric object
function FloatingShape({
  position,
  rotation,
  color,
  geometryType
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  geometryType: 'box' | 'icosahedron' | 'torus' | 'cylinder';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 + rotation[0];
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={meshRef} rotation={rotation} castShadow receiveShadow>
        {geometryType === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometryType === 'torus' && <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />}
        {geometryType === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
        {geometryType === 'cylinder' && <cylinderGeometry args={[0.8, 0.8, 2, 32]} />}
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          transmission={0.5}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4338ca" />
        <pointLight position={[10, -10, 10]} intensity={1} color="#ec4899" />

        <FloatingShape position={[-4, 2, -2]} rotation={[0.5, 0.5, 0]} color="#3b82f6" geometryType="icosahedron" />
        <FloatingShape position={[4, -1, -3]} rotation={[-0.5, 0.2, 0]} color="#ec4899" geometryType="torus" />
        <FloatingShape position={[-3, -3, -4]} rotation={[0, 0.5, 0.2]} color="#8b5cf6" geometryType="box" />
        <FloatingShape position={[5, 3, -5]} rotation={[0.2, 0.8, 0.5]} color="#06b6d4" geometryType="cylinder" />

        <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2} far={10} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
