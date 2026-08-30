import { Canvas } from '@react-three/fiber';
import AICore from './AICore';

interface HeroCanvasProps {
  mouseX: number;
  mouseY: number;
  clicked: boolean;
  onCoreClick: () => void;
}

export default function HeroCanvas({ mouseX, mouseY, clicked, onCoreClick }: HeroCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <group position={[3.5, 0, -2]} scale={1.4}>
        <AICore
          mouseX={mouseX}
          mouseY={mouseY}
          clicked={clicked}
          onCoreClick={onCoreClick}
        />
      </group>
      <group position={[-4, 2, -4]} scale={0.75}>
        <AICore
          mouseX={mouseX}
          mouseY={mouseY}
          clicked={false}
          onCoreClick={() => {}}
        />
      </group>
    </Canvas>
  );
}
