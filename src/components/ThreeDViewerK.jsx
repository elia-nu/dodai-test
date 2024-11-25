import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";

const GLBModel = ({ rotation, zoom }) => {
  const { scene } = useGLTF("/St.glb", true);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotation * (Math.PI / 180);
      modelRef.current.scale.setScalar(zoom);
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} />;
};

const CameraController = ({ zoom }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 5 / zoom;
  }, [zoom, camera]);

  return null;
};

const ThreeDViewer = ({ rotation, zoom }) => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <CameraController zoom={zoom} />
      <GLBModel rotation={rotation} zoom={zoom} />
      <Environment preset="city" />
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        scale={5}
        blur={2}
        far={4}
      />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeDViewer;
