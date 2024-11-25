import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html } from '@react-three/drei';

const GLBModel = () => {
  const { scene } = useGLTF('/St.glb', true);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, -1, 0]} scale={1.5} />;
};

const ThreeDViewer = () => {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [3, 1, 5], fov: 30 }} className='w-full h-full bg-gradient-to-b from-orange-500 to-white'>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />

        <Suspense fallback={<Html center><div className="text-orange-500 font-bold text-xl">Loading...</div></Html>}>
          <GLBModel />
        </Suspense>

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDViewer;
