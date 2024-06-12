import React from 'react';

const FullPageSection = ({ children }) => {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      {children}
    </div>
  );
};

export default FullPageSection;