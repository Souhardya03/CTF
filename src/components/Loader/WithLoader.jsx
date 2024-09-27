import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const WithLoader = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };

      if (document.readyState === 'complete') {
        // If the page is already loaded, call handleLoad immediately
        handleLoad();
      } else {
        // Otherwise, add the event listener
        window.addEventListener('load', handleLoad);
      }

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

    return loading ? <Loader /> : <WrappedComponent />;
  };
};

export default WithLoader;