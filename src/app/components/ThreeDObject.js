"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useState } from "react";

const Model = ({ isPlaying }) => {
  const { scene, animations } = useGLTF("/model/timepass.glb");  
  const { actions } = useAnimations(animations, scene);

  // Toggle animation state
  if (actions && animations.length > 0) {
    const ballAction = actions[Object.keys(actions)[0]]; // Assuming the ball's animation is the first one
    if (isPlaying) {
      ballAction?.play();
    } else {
      ballAction?.stop();
    }
  }

  return <primitive object={scene} scale={1.5} />;
};

const ThreeDPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);  

  const toggleAnimation = () => {
    setIsPlaying((prev) => !prev);  
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
    
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <Environment preset="sunset" background />
        <Model isPlaying={isPlaying} />
        <OrbitControls makeDefault />
        <EffectComposer>
          <Bloom intensity={1} luminanceThreshold={1} luminanceSmoothing={1} />
        </EffectComposer>
      </Canvas>

      {/* Play/Pause Button */}
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "50%",
          background: "rgba(255, 250, 250, )",
          color: "Black",
          padding: "30px 60px",
          borderRadius: "15px",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={toggleAnimation}
      >
        {isPlaying ? "Pause" : "Play"}
      </div>
    </div>
  );
};

export default ThreeDPage;
