import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import Main from "./Main";

const Earth = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);

  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 3;
    globe.controls().enableZoom = true;
    globe.scene().background = new THREE.Color(0x000000);
  }, []);

  const dehradunLabel = [
    { lat: 30.3165, lng: 78.0322, name: "Dehradun" },
  ];

  const toggleMainVisibility = () => {
    setIsMainVisible(!isMainVisible);
  };

  return (
    <div className="earth-container relative flex justify-center items-center h-screen bg-black">
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        className="absolute w-full h-full"
        width={window.innerWidth < 768 ? 350 : 800}
        height={window.innerWidth < 768 ? 350 : 800}
        labelsData={dehradunLabel}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={2}
        labelColor={() => "rgba(255, 255, 255, 0.75)"}
        labelDotRadius={1}
        labelAltitude={0.01}
      />

      {isMainVisible ? (
        <button
          onClick={toggleMainVisibility}
          onTouchEnd={toggleMainVisibility}
          className="absolute top-4 right-4 p-2 text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-700 focus:bg-red-700 active:bg-red-900"
        >
          Hide Info
        </button>
      ) : (
        <button
          onClick={toggleMainVisibility}
          onTouchEnd={toggleMainVisibility}
          className="absolute top-4 right-4 p-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-700 focus:bg-green-700 active:bg-green-900"
        >
          Show Info
        </button>
      )}

      {isMainVisible && <Main />}
    </div>
  );
};

export default Earth;
