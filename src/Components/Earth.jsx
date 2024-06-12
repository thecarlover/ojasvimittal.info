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
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        width={800} // Initial width
        height={800} // Initial height
        className="absolute w-full h-full"
      />
      <Main />
    </div>
  );
};

export default Earth;