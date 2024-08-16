import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import "./About.css";
import AboutHat from "../../assets/images/about-hat.png";

const About = () => {
	return (
		<>
			<div className="about-back h-[100vh] w-full">
				<Navbar />
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div className="flex text-white pt-40 flex-col justify-center items-center relative">
						<div className="WitchMagic text-5xl relative flex flex-col items-center">
							{/* Hat image */}
							<div className="w-[50%] -left-[4.5rem] absolute top-[-5.8rem] z-[2] -rotate-45">
								<img
									src={AboutHat}
									alt="About Hat"
									className="shadow-md glow-effect"
								/>
							</div>
							{/* Text */}
							<div className="z-[1] ">
								<span className="text-red-500 text-6xl">ABOUT</span> <span className="glow-white">US</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default About;
