"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

// Model Component
const Model = ({ animationState, setAnimationTime, animationDuration, colorChange }) => {
  const { scene, animations } = useGLTF("/model/porsche.glb");
  const { actions } = useAnimations(animations, scene);

  const animationName = Object.keys(actions)[0]; // Assuming the first animation
  const ballAction = actions[animationName];
  const animationTimeRef = useRef(0); // Store current animation time

  useEffect(() => {
    if (ballAction) {
      if (animationState === "play") {
        ballAction.reset(); // Reset animation state
        ballAction.time = 0; // Start from the beginning
        ballAction.play();
      } else if (animationState === "resume") {
        ballAction.paused = false; // Ensure animation is unpaused
        ballAction.play();
      } else if (animationState === "pause") {
        animationTimeRef.current = ballAction.time; // Store paused time
        ballAction.paused = true; // Pause animation
      } else if (animationState === "reset") {
        ballAction.stop();
        ballAction.time = 0; // Reset to the beginning
      }
    }
  }, [animationState, ballAction]);

  useEffect(() => {
    // Update animation time
    if (ballAction) {
      const updateTime = () => setAnimationTime(ballAction.time);
      const interval = setInterval(updateTime, 100); // Update every 100ms
      return () => clearInterval(interval);
    }
  }, [ballAction, setAnimationTime]);

  useEffect(() => {
    if (animations[0]) {
      animationDuration(animations[0].duration); // Pass duration to parent
    }
  }, [animations, animationDuration]);

  // Log the meshes and change color based on part names
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          console.log(`Mesh name: ${child.name}, Mesh material color: ${child.material.color.getHex()}`);
          
          // For example, change the color of the wheels and brake calipers
          if (child.name === "AlloyWheel") {
            console.log("Changing AlloyWheel color");
            child.material.color.set(colorChange.wheelColor);
          }
          if (child.name === "BrakeCaliper") {
            console.log("Changing BrakeCaliper color");
            child.material.color.set(colorChange.brakeCaliperColor);
          }
          // Log the updated color of the mesh after change
          console.log(`Updated color of ${child.name}: ${child.material.color.getHex()}`);
        }
      });
    }
  }, [colorChange, scene]);

  return <primitive object={scene} />;
};

// Parent Component
const ThreeDPage = () => {
  const [animationState, setAnimationState] = useState("pause");
  const [animationTime, setAnimationTime] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);

  const [colorChange, setColorChange] = useState({
    wheelColor: "#ff0000", // Initial color for wheels
    brakeCaliperColor: "#0000ff", // Initial color for brake calipers
  });

  const changeColor = (part, color) => {
    console.log(`Changing ${part} color to ${color}`);
    setColorChange((prev) => {
      const updatedColorChange = { ...prev, [part]: color };
      console.log("Updated color state:", updatedColorChange);
      return updatedColorChange;
    });
  };

  const handlePlay = () => setAnimationState("play");
  const handlePause = () => setAnimationState("pause");
  const handleResume = () => setAnimationState("resume");
  const handleReset = () => setAnimationState("reset");

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <spotLight position={[3, 5, 4]} angle={0.1} intensity={5} />
        <spotLight position={[3, 2]} angle={0.1} intensity={5} />
        <Environment preset="city" background />
        <pointLight color="white" intensity={2} position={[0, 5, 0]} />
        <Model
          animationState={animationState}
          setAnimationTime={setAnimationTime}
          animationDuration={setAnimationDuration}
          colorChange={colorChange}
        />
        <OrbitControls makeDefault />
      </Canvas>

      {/* Controls */}
      {/* <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={handlePlay} style={buttonStyle}>Play</button>
        <button onClick={handlePause} style={buttonStyle}>Pause</button>
        <button onClick={handleResume} style={buttonStyle}>Resume</button>
        <button onClick={handleReset} style={buttonStyle}>Reset</button>
      </div> */}

      {/* Animation Time Display */}
      {/* <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>Animation Time: {animationTime.toFixed(2)}s</p>
        <p>Animation Duration: {animationDuration.toFixed(2)}s</p>
      </div> */}

      {/* Color Change Buttons */}
      <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
        <button onClick={() => changeColor("wheelColor", "#ff0000")} style={buttonStyle}>Red Wheels</button>
        <button onClick={() => changeColor("wheelColor", "#00ff00")} style={buttonStyle}>Green Wheels</button>
        <button onClick={() => changeColor("brakeCaliperColor", "#0000ff")} style={buttonStyle}>Blue Brakes</button>
        <button onClick={() => changeColor("brakeCaliperColor", "#ffff00")} style={buttonStyle}>Yellow Brakes</button>
      </div>
    </div>
  );
};

// Button Styles
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "14px",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default ThreeDPage;
