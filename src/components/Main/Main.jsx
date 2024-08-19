import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='h-[100vh] mainbackground w-full gap-4 flex flex-col justify-center items-center text-[#f85712ba]'>
      <div className='welcome text-4xl lg:text-6xl animate-down'>WELCOME TO</div>
      <div className='halloweenFont text-6xl lg:text-9xl animate-scale'>Z3R0D4Y CTF</div>
    </div>
  );
}

export default Main;
