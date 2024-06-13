import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import Main from "./Main";

const Earth = () => {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 3;
    globe.controls().enableZoom = false;
    globe.scene().background = new THREE.Color(0x000000);
  }, []);

  return (
    <div className="earth-container relative flex justify-center items-center h-screen">
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Change to a lighter globe image
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        className="absolute w-full h-full"
        width={window.innerWidth < 768 ? 350 : 800}
        height={window.innerWidth < 768 ? 350 : 800}
      />
      <Main />
    </div>
  );
};

export default Earth;
