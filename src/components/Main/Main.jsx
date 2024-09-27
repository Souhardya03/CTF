import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Main.css";
import mainBackground from "../../assets/images/haunted-house.jpg"; // Adjust the path as needed

const Main = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const image = new Image();
      image.src = mainBackground;
      image.onload = () => {
        setLoading(false);
      };
    };

    loadImage();

    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div 
      className='h-[100vh] mainbackground w-full gap-4 flex justify-center items-center text-[#f85712ba]'
      
    >
      <div className='flex justify-center items-center flex-col'>

      <div className='welcome text-4xl lg:text-6xl animate-down'>WELCOME TO</div>
      <div className='halloweenFont text-6xl lg:text-9xl animate-scale'>Z3R0D4Y CTF</div>
      </div>
    </div>
  );
}

export default Main;