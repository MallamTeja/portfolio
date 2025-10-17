import React, { Suspense, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useTexture } from "@react-three/drei";

type ThreeTechBallProps = {
  imageUrl: string;
  size?: number;
  hoverScale?: number;
  enableOrbit?: boolean;
};

const Canvas = dynamic(() => import("@react-three/fiber").then(m => m.Canvas), {
  ssr: false,
});

function LowPolySphere({ textureUrl, size = 1, hoverScale = 1.1 }: { textureUrl: string; size?: number; hoverScale?: number }) {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const colorMap = useTexture(textureUrl);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.6; // smooth continuous spin
    const target = hovered ? hoverScale : 1;
    meshRef.current.scale.x += (target - meshRef.current.scale.x) * 0.15;
    meshRef.current.scale.y += (target - meshRef.current.scale.y) * 0.15;
    meshRef.current.scale.z += (target - meshRef.current.scale.z) * 0.15;
  });

  const emissiveIntensity = useMemo(() => 0.08, []);

  return (
    <Float speed={1.5} // slower is gentler
      rotationIntensity={0.3}
      floatIntensity={0.6}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        {/* low poly sphere */}
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          map={colorMap}
          roughness={0.6}
          metalness={0.1}
          emissive={hovered ? "#2a6bff" : "#000000"}
          emissiveIntensity={hovered ? 0.22 : emissiveIntensity}
        />
        {/* subtle glow/outline via second slightly larger mesh */}
        <mesh scale={1.03} visible={hovered}>
          <icosahedronGeometry args={[size, 1]} />
          <meshBasicMaterial color="#2a6bff" transparent opacity={0.18} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function ThreeTechBall({ imageUrl, size = 0.9, hoverScale = 1.1, enableOrbit = false }: ThreeTechBallProps) {
  // deep navy background
  const background = "#0a0f1f";

  return (
    <div style={{ width: 84, height: 84 }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 45 }}>
        {/* background color */}
        {/* @ts-expect-error drei v9 color primitive attach typing */}
        <color attach="background" args={[background]} />

        {/* lighting for dynamic shading */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 5]} intensity={1.0} castShadow />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} />

        <Suspense fallback={null}>
          <group>
            <LowPolySphere textureUrl={imageUrl} size={size} hoverScale={hoverScale} />
          </group>
        </Suspense>

        {enableOrbit ? <OrbitControls enableZoom={false} enablePan={false} /> : null}
      </Canvas>
    </div>
  );
}


