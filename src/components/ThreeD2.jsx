
import React, { Suspense, useState, useEffect, useRef } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { motion } from "framer-motion";

const ThreeDViewer = React.lazy(() => import("./ThreeDViewerK"));

function ThreeD() {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (viewerRef.current) {
      observer.observe(viewerRef.current);
    }

    return () => {
      if (viewerRef.current) {
        observer.unobserve(viewerRef.current);
      }
    };
  }, []);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));
  const handleResetView = () => {
    setRotation(0);
    setZoom(1);
  };

  return (
    <div className="relative w-full h-full">
      <ErrorBoundary>
        <Suspense fallback={
          <div className="loading text-xl text-orange-500 flex justify-center items-center h-full animate-pulse">
            Loading 3D Model...
          </div>
        }>
          <div className="w-full h-full" ref={viewerRef}>
            <ThreeDViewer rotation={rotation} zoom={zoom} />
          </div>
        </Suspense>
      </ErrorBoundary>
      <div className="absolute bottom-8 left-4 right-4 flex flex-wrap justify-center gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md text-sm"
        >
          Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md text-sm"
        >
          Zoom Out
        </button>
        <button
          onClick={handleResetView}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md text-sm font-semibold"
        >
          Reset View
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="360"
        value={rotation}
        onChange={(e) => setRotation(Number(e.target.value))}
        className="absolute bottom-0 left-0 right-0 w-[calc(100%-2rem)] appearance-none bg-orange-200 h-2 rounded-full outline-none opacity-70 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

export default ThreeD;
