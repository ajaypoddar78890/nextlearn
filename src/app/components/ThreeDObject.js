"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Model = () => {
  const { scene, materials } = useGLTF("/model/bmw.glb"); // Replace with your GLB file path

  // Example of modifying material properties
  if (materials) {
    Object.keys(materials).forEach((key) => {
      materials[key].metalness = 0.8; // Enhance reflectivity
      materials[key].roughness = 0.3; // Add slight roughness
      materials[key].color.set("#ffffff"); // Change material color (gold in this
    });
  }

  return <primitive object={scene} scale={1.5} />;
};

const ThreeDPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas shadows>
        {/* Ambient light for soft overall lighting */}
        <ambientLight intensity={0.5} />

        {/* Directional light for strong highlights */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Spot light for focused lighting */}
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />

        {/* Point light for additional warm lighting */}
        <pointLight position={[-50, 0, 0]} intensity={0.8} color="#ffffff" />

        {/* Your 3D model */}
        <Model />

        {/* Controls for camera movement */}
        <OrbitControls makeDefault />

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={1.3}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.3}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeDPage;
