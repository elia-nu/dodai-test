import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html } from "@react-three/drei";

const GLBModel = () => {
  const { scene } = useGLTF("/St.glb", true);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.009; // Adjust this value to change rotation speed
    }
  });

  return (
    <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={1} />
  );
};

const CameraAnimation = () => {
  const { camera } = useThree();

  useEffect(() => {
    if (camera) {
      camera.position.x = 0;
    }
  }, [camera]);

  useFrame(() => {
    if (camera) {
      camera.position.y = 1;
    }
  });

  return null;
};

const ThreeDViewer = () => {
  return (
    <div className="relative border-4 border-orange-500 border-dashed   rounded-full   ">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 30 }}
        className="w-40 h-40 bg-white  "
        style={{ width: "350px", height: "350px", borderRadius: "50%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[15, 5, 25]} intensity={6} />

        <Suspense fallback={<Html center>Loading...</Html>}>
          <CameraAnimation />
          <GLBModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-4xl font-bold    ">
        Dodai
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-lg font-bold  ">
        E-moblity for africa
      </div>
    </div>
  );
};

export default ThreeDViewer;
