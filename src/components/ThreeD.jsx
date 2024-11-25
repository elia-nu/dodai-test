import React, { Suspense, useState, useEffect, useRef } from "react";
import ErrorBoundary from "./ErrorBoundary";

const ThreeDViewer = React.lazy(() => import("./ThreeDViewerK"));

function ThreeD() {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const viewerRef = useRef(null);
  const scrollStartY = useRef(0);
  const rotationComplete = useRef(false);

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

  useEffect(() => {
    const handleScroll = (e) => {
      if (isInView && !rotationComplete.current) {
        e.preventDefault();
        const scrollDelta = window.scrollY - scrollStartY.current;
        const newRotation = rotation + scrollDelta * 0.5;
        setRotation(newRotation % 360);

        if (newRotation >= 360) {
          rotationComplete.current = true;
        }
      }
    };

    if (isInView) {
      scrollStartY.current = window.scrollY;
      window.addEventListener("scroll", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView, rotation]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));
  const handleResetView = () => {
    setRotation(0);
    setZoom(1);
  };

  return (
    <div className="relative md:max-h-screen bg-white">
      <h1 className="text-5xl font-bold text-center py-8 text-orange-500  shadow-lg">
        Dodai Scooter 3D Experience
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 h-[calc(100vh-112px)] bg-white rounded-lg shadow-xl m-4">
          <ErrorBoundary>
            <Suspense fallback={<div className="loading text-2xl text-orange-500 flex justify-center items-center h-full">Loading 3D Model...</div>}>
              <div className="w-full h-full" ref={viewerRef}>
                <ThreeDViewer rotation={rotation} zoom={zoom} />
              </div>
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="md:w-1/4 p-6 bg-white rounded-lg shadow-xl m-4">
          <div className="space-y-6 flex flex-col justify-center items-center">
            <img className="w-48 h-auto mb-6 rounded-lg shadow-md" src="/dodai.png" alt="Dodai Logo" />
            <div className="flex gap-4 w-full">
              <button
                onClick={handleZoomIn}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                Zoom In
              </button>
              <button
                onClick={handleZoomOut}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                Zoom Out
              </button>
            </div>
            <button
              onClick={handleResetView}
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-md"
            >
              Reset View
            </button>
            <div className="w-full">
              <label htmlFor="rotation-slider" className="block font-bold mb-2 text-gray-700">
                Rotation Control
              </label>
              <input
                id="rotation-slider"
                type="range"
                min="310"
                max="670"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
            <img className="w-full h-auto mt-6 rounded-lg shadow-md" src="/dodai3d.jpeg" alt="Dodai 3D Model" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeD;
