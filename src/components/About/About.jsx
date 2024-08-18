import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import "./About.css";
import AboutHat from "../../assets/images/about-hat.png";
import Footer from "../Footer/Footer";

const About = () => {
	// Full text to display in the terminal
	const fullText = `Welcome to zero_logon,
The cyber security club of JGEC.

At our club, we are passionate about learning how to protect digital landscapes and aware everyone to ensure online safety for everyone. Whether you're a intermediate cybersecurity.learner or just starting your journey into the world of cyber defense, you'll find a community of like-minded individuals eager to learn, share, and grow together.

Zero_logon is established in 2022, in the guidance of Syed Modassir Ali, (..,Solarwinds). 

Who are we? 
We are students of different departments of JGEC, united by common goal: to enhance our skills, share knowledge and address the evolving challenges in cyber world.

What We Do:

    Educational Workshops & Seminars: 
    We offer hands-on training sessions and presentations on the latest cybersecurity topics, from ethical hacking and threat analysis to cryptography and incident response.


    Networking Opportunities: 
    Connect with experts, industry leaders, and fellow members through our events and forums. Building a strong network is key to staying informed and advancing in the field.


    Collaborative Projects: 
    Engage in real-world challenges and collaborative projects that enhance practical skills and provide valuable experience.


    Resources & Tools: 
    Access a wealth of resources, including articles, research papers, and toolkits designed to keep you at the forefront of cybersecurity.

`;

	const [terminalContent, setTerminalContent] = useState("");
	const [index, setIndex] = useState(0);

	
	useEffect(() => {
		if (index < fullText.length) {
			const timeoutId = setTimeout(() => {
				setTerminalContent((prev) => prev + fullText[index]);
				setIndex(index + 1);
			}, 12);

			return () => clearTimeout(timeoutId);
		}
	}, [index, fullText]);

	return (
		<>
			<div className="about-back overflow-auto h-[100vh] w-full">
				<Navbar />
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div className="flex text-white pt-32 h-full flex-col justify-center items-center relative">
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
								<span className="text-red-500 text-6xl">ABOUT</span>{" "}
								<span className="glow-white">US</span>
							</div>
						</div>
						<div className="h-[70vh] mb-6  p-4 mt-4 bg-[#2423237c] rounded-md w-2/3">
							<div className="w-full h-full">
								<div className="terminal_toolbar">
									<div className="butt">
										<button className="btn btn-color"></button>
										<button className="btn"></button>
										<button className="btn"></button>
									</div>
									<p className="user">Z3R0_LOGON@admin: ~</p>
									<div className="add_tab">+</div>
								</div>
								<div className="terminal_body h-full overflow-auto">
									<div className="terminal_promt">
										<spans className="terminal_user">z3r0_logon@admin:</spans>
										<spans className="terminal_location">~</spans>
										<spans className="terminal_bling">$</spans>
										
										<div className="w-[80%] square-one ml-2">
											<pre className="text-white square-one text-[1rem]">{terminalContent}</pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<Footer />
			</div>
		</>
	);
};

export default About;
