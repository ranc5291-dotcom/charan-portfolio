import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FinalParticles() {
  const points = useRef<THREE.Points>(null);
  const count = 60;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.06;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#4f8ef7" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function ContactCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <FinalParticles />
        <pointLight color="#4f8ef7" intensity={0.5} distance={8} position={[0, 0, 2]} />
      </Suspense>
    </Canvas>
  );
}
