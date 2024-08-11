// components/WithLoader/WithLoader.jsx
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const WithLoader = (WrappedComponent) => {
  return function WithLoaderComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading time
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the time as needed
    }, []);

    return loading ? <Loader /> : <WrappedComponent />;
  };
};

export default WithLoader;
