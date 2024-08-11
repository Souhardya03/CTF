// components/Loader/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center bg-black justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

export default Loader;
