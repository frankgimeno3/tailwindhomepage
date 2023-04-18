import React from 'react';

export const FirstVideoElement = () => {
  
  return (
    <div className="relative">
      <video className="w-full h-full object-cover absolute inset-0 z-0" autoPlay muted loop>
        <source src="/video/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-white">
      <h1 className="text-white text-7xl font-poppins text-center mx-40 my-20">
          Generamos impactos con resultados medibles
      </h1>
      </div>
    </div>
  );
};

