import React from "react";
import "./Sponsors.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import witch_stick from "../../assets/images/skull.png";
import nullkolkata from "../../assets/images/nullkolkata.jpg";
import linkedin from "../Team/images/linkedin.png";
import facebook from "../Team/images/facebook.png";
import twitter from "../Team/images/twitter.png";
import pwnedlabs from "../../assets/images/pwnedlabs.png";

const Sponsors = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen lg:mt-0 mt-40 lg:pb-0 pb-8 justify-center flex flex-col items-center bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="relative">
        <motion.div 
          className="absolute lg:left-[3em] lg:-top-[10em] -top-[12em] z-[1] lg:w-[65%] glow-effect rotate-[3deg]"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 3, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={witch_stick}
            className="w-full h-full"
            alt=""
          />
        </motion.div>
        <motion.div 
          className="lg:text-5xl text-4xl underline text-orange-500 z-[2] font-bold nosifer-regular relative shadow-lg"
          variants={titleVariants}
        >
          Sponsers
        </motion.div>
      </motion.div>

      <motion.div className="lg:h-[15em] stardos-stencil-regular text-[#ffffff] flex lg:flex-row flex-col justify-center gap-8 md:gap-4 lg:gap-[10em] mt-14 items-center">
        {/* PwnedLabs Card */}
        <motion.div 
          className="h-[15em] hover:scale-105 duration-300 border bg-[#22222251] border-orange-500 card_back w-[20em] rounded-lg relative"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute top-4 left-4 bg-[#0f0f0fe3] w-full h-[15em] flex flex-col justify-center items-center rounded-lg border border-slate-600">
            <motion.div whileHover="hover">
              <Link to="https://pwnedlabs.io/" className="rounded-md pt-2 h-[8em] w-[8em] lg:h-[10em] lg:w-[10em] block">
                <motion.img
                  src={pwnedlabs}
                  loading="lazy"
                  alt=""
                  className="rounded-md object-cover"
                  variants={imageHoverVariants}
                />
              </Link>
            </motion.div>
            <div className="text-glow text-2xl pb-2">PWNED LABS</div>
            <div className="flex pb-4 items-center justify-center gap-3">
              <motion.div whileHover="hover">
                <Link to="https://www.linkedin.com/company/pwned-labs/">
                  <motion.img
                    src={linkedin}
                    loading="lazy"
                    className="w-8 h-8 glow-effect"
                    alt=""
                    variants={socialIconVariants}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover="hover">
                <Link to="https://x.com/PwnedLabs">
                  <motion.img
                    src={twitter}
                    loading="lazy"
                    className="w-8 h-8 glow-effect"
                    alt=""
                    variants={socialIconVariants}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Null Kolkata Card */}
        <motion.div 
          className="h-[15em] hover:scale-105 duration-300 border bg-[#22222251] border-orange-500 card_back w-[20em] rounded-lg relative"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute top-4 left-4 bg-[#0f0f0fe3] w-full h-[15em] flex flex-col justify-center items-center rounded-lg border border-slate-600">
            <motion.div whileHover="hover">
              <Link to="https://null.community/chapters/14-kolkata" className="rounded-md pt-6 h-[8em] w-[8em] lg:h-[10em] lg:w-[10em] block">
                <motion.img
                  src={nullkolkata}
                  loading="lazy"
                  alt=""
                  className="rounded-md object-cover"
                  variants={imageHoverVariants}
                />
              </Link>
            </motion.div>
            <div className="text-glow text-2xl pb-2">NULL KOLKATA</div>
            <div className="flex pb-4 items-center justify-center gap-3">
              <motion.div whileHover="hover">
                <Link to="https://www.linkedin.com/company/null-kolkata-chapter/">
                  <motion.img
                    src={linkedin}
                    loading="lazy"
                    className="w-8 h-8 glow-effect"
                    alt=""
                    variants={socialIconVariants}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover="hover">
                <Link to="https://www.facebook.com/nullkolkata">
                  <motion.img
                    src={facebook}
                    loading="lazy"
                    className="w-8 h-8 glow-effect"
                    alt=""
                    variants={socialIconVariants}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover="hover">
                <Link to="https://x.com/nullkol?s=11">
                  <motion.img
                    src={twitter}
                    loading="lazy"
                    className="w-8 h-8 glow-effect"
                    alt=""
                    variants={socialIconVariants}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sponsors;