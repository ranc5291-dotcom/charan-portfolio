import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Line, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  position: THREE.Vector3;
  speed: number;
  angle: number;
  radius: number;
  orbitTilt: THREE.Euler;
}

function OrbitingNode({ data, accent, isActive }: { data: NodeData; accent: THREE.Color; isActive: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(data.angle);

  useFrame((_, delta) => {
    t.current += delta * data.speed;
    const x = Math.cos(t.current) * data.radius;
    const z = Math.sin(t.current) * data.radius;
    const euler = data.orbitTilt;
    if (meshRef.current) {
      meshRef.current.position.set(
        x * Math.cos(euler.y) - z * Math.sin(euler.y),
        z * Math.sin(euler.x),
        x * Math.sin(euler.y) + z * Math.cos(euler.y)
      );
      meshRef.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[isActive ? 0.085 : 0.065, 0]} />
      <meshStandardMaterial
        color={isActive ? accent : new THREE.Color('#a1a1aa')}
        emissive={isActive ? accent : new THREE.Color('#52525b')}
        emissiveIntensity={isActive ? 1.5 : 0.4}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}



function ParticleField({ count = 80 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 1.4;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const velocities = useMemo(() => {
    return Array.from({ length: count }, () => ({
      theta: Math.random() * 0.002 + 0.001,
      phi: (Math.random() - 0.5) * 0.001,
    }));
  }, [count]);

  useFrame((_, delta) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
      const r = Math.sqrt(x * x + y * y + z * z);
      const theta = Math.atan2(z, x) + velocities[i].theta * delta * 60;
      const phi = Math.acos(Math.max(-1, Math.min(1, y / r))) + velocities[i].phi * delta * 60;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#4f8ef7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function RingSystem() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.18;
    if (ring2.current) ring2.current.rotation.x += delta * 0.12;
    if (ring3.current) { ring3.current.rotation.y += delta * 0.09; ring3.current.rotation.z -= delta * 0.06; }
  });

  const ringMat = (
    <meshBasicMaterial color="#4f8ef7" transparent opacity={0.08} side={THREE.DoubleSide} />
  );

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.004, 8, 120]} />
        {ringMat}
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.6, 0.003, 8, 120]} />
        <meshBasicMaterial color="#7c6af7" transparent opacity={0.07} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.0, 0.002, 8, 120]} />
        <meshBasicMaterial color="#4f8ef7" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

interface AICoreProps {
  mouseX: number;
  mouseY: number;
  clicked: boolean;
  onCoreClick: () => void;
  isMobile?: boolean;
}

export default function AICore({ mouseX, mouseY, clicked, onCoreClick, isMobile = false }: AICoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const accent = useMemo(() => new THREE.Color('#4f8ef7'), []);
  const [hoveredCore, setHoveredCore] = useState(false);
  const { camera } = useThree();

  const particleCount = isMobile ? 40 : 80;

  const nodeData = useMemo<NodeData[]>(() => {
    const count = isMobile ? 8 : 14;
    return Array.from({ length: count }, (_, i) => ({
      position: new THREE.Vector3(),
      speed: 0.18 + Math.random() * 0.2,
      angle: (i / count) * Math.PI * 2,
      radius: 0.7 + Math.random() * 0.65,
      orbitTilt: new THREE.Euler(
        (Math.random() - 0.5) * Math.PI * 0.7,
        (Math.random() - 0.5) * Math.PI * 0.7,
        0
      ),
    }));
  }, [isMobile]);

  const staticNodePositions = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / 6);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return new THREE.Vector3(
        0.95 * Math.sin(phi) * Math.cos(theta),
        0.95 * Math.cos(phi),
        0.95 * Math.sin(phi) * Math.sin(theta)
      );
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    // Smooth mouse follow
    groupRef.current.rotation.y += (mouseX * 0.35 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-mouseY * 0.2 - groupRef.current.rotation.x) * 0.04;

    // Gentle auto-rotation
    groupRef.current.rotation.y += delta * 0.05;

    // Core pulse
    if (coreRef.current) {
      const scale = clicked
        ? 1 + Math.sin(time * 6) * 0.08
        : 1 + Math.sin(time * 1.5) * 0.025 + (hoveredCore ? 0.06 : 0);
      coreRef.current.scale.setScalar(scale);
    }

    // Camera subtle drift
    camera.position.y = Math.sin(time * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <Sphere
        ref={coreRef}
        args={[0.28, 64, 64]}
        onClick={onCoreClick}
        onPointerEnter={() => setHoveredCore(true)}
        onPointerLeave={() => setHoveredCore(false)}
      >
        <MeshDistortMaterial
          color={clicked ? '#7c6af7' : '#4f8ef7'}
          emissive={clicked ? '#7c6af7' : '#4f8ef7'}
          emissiveIntensity={clicked ? 2.5 : 1.8}
          distort={clicked ? 0.45 : 0.18}
          speed={clicked ? 4 : 1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere args={[0.32, 32, 32]}>
        <meshBasicMaterial color="#4f8ef7" transparent opacity={clicked ? 0.12 : 0.05} side={THREE.BackSide} />
      </Sphere>

      {/* Static nodes at fixed positions */}
      {staticNodePositions.map((pos, i) => (
        <mesh key={`sn-${i}`} position={pos}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color="#4f8ef7"
            emissive="#4f8ef7"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Connection lines from core to static nodes */}
      {staticNodePositions.map((pos, i) => (
        <Line
          key={`cl-${i}`}
          points={[new THREE.Vector3(0, 0, 0), pos]}
          color="#4f8ef7"
          lineWidth={0.5}
          transparent
          opacity={0.2}
        />
      ))}

      {/* Orbiting nodes */}
      {nodeData.map((nd, i) => (
        <OrbitingNode key={i} data={nd} accent={accent} isActive={clicked && i % 3 === 0} />
      ))}

      {/* Rings */}
      <RingSystem />

      {/* Particles */}
      <ParticleField count={particleCount} />

      {/* Lighting */}
      <pointLight color="#4f8ef7" intensity={clicked ? 3 : 1.5} distance={5} position={[0, 0, 0]} />
      <pointLight color="#7c6af7" intensity={0.8} distance={4} position={[1, 1, -1]} />
    </group>
  );
}
