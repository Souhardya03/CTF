import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import "./Team.css";
import WitchStick from "../../assets/images/witch-stick.png";
import teamBackground from "../../assets/images/challenge-2.gif"; // Adjust the path as needed
import DisplayCard from "../Team/DisplayCards.jsx";

const Team = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const image = new Image();
      image.src = teamBackground;
      image.onload = () => {
        setLoading(false);
      };
    };

    loadImage();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 20) {
        console.log("scroll");
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div 
        className="overflow-x-hidden team-back lg:h-full h-full md:h-[95vh] w-full"
        
      >
        <Navbar scrolled={scrolled} />
        <motion.div
          exit="out"
          animate="in"
          initial="init"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="flex text-white lg:pt-20 pt-24 flex-col justify-center items-center relative">
            <div className="WitchMagic lg:text-5xl relative flex flex-col text-4xl items-center">
              <div className="z-[1] ">
                <span className="glow-white lg:text-5xl">MEET OUR</span>{" "}
                <span className=" text-red-500">TEAM</span>
              </div>
              <div className="w-full">
                <img
                  src={WitchStick}
                  className="absolute glow-effect left-[3rem] w-[80%] -top-[4.6rem] lg:-top-[6.2rem] rotate-[215deg]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-2 mb-4">
            <DisplayCard />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Team;