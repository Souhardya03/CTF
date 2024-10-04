import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Rules.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import rules_stick from "../../assets/images/rules-stick.png";
import rule_back from "../../assets/images/rules-background.jpg";

const Rules = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const image = new Image();
      image.src = rule_back;
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3, // Stagger delay for each item
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar scrolled={scrolled} />
      <div className="rules-back lg:min-h-screen md:min-h-screen pb-14 flex justify-center w-full">
        <motion.div
          exit="out"
          animate="in"
          initial="init"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="flex text-white w-full lg:pt-24 md:pt-32 pt-20 flex-col justify-center items-center relative">
            <div className="MagnificentSerif lg:text-6xl relative flex flex-col text-5xl items-center">
              <div className="animate-down ">
                <span className="text-[#f48619] WitchMagic">RULES</span>
              </div>
              <div className="w-full">
                <img
                  src={rules_stick}
                  className="absolute animate-scale glow-effect left-[1rem] w-[60%] -top-[3.9rem] lg:-top-[4.8rem] rotate-[255deg]"
                  alt=""
                />
              </div>
            </div>

            <ul className="text-white w-[90%] animate-up lg:w-[60%] flex-col gap-8 trick-or-treats rounded-md bg-[#3e3c3c89] flex my-8 pl-10 px-8 p-4">
              {[
                "This is a team-only event. You must either create a team during registration, join an existing team, or request an invite link from a team leader.",
                "Teams can have up to 4 members (including the Team Leader) and must be registered before the event.",
                "Registration will be closed once the CTF event begins.",
                "Denial of Z3R0D4Y CTF infrastructure is strictly prohibited.",
                "Finding bugs in the Z3R0D4Y CTF infrastructure can earn your team extra points.",
                "Flag format is : zeroday(fake_flag)",
                "The golden rule: Hack before you get hacked!",
              ].map((rule, i) => (
                <motion.li
                  key={i}
                  className="text-sm lg:text-[18px] font-medium"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                >
                  {rule}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
