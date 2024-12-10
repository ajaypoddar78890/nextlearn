"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/model/newcube.glb"); // Adjust path
  return <primitive object={scene} scale={1} />;
};

const ThreeDPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDPage;
