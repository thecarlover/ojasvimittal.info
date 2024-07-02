import React, { useEffect, useState } from 'react';

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Ojasvi Mittal</h1>
            <br />
         
          <p className='text-white'>Loading...</p>
          <div className="spinner mt-4 bg-white"></div>
        </div>
      </div>
    ) : null
  );
};

export default Splash;
