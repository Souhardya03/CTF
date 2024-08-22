import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import "./About.css";
import AboutHat from "../../assets/images/about-hat.png";
import Footer from "../Footer/Footer";

const About = () => {

	const fullText = `Welcome to zero_logon,
The cyber security club of JGEC.
At our club, we are passionate about learning how to protect digital landscapes and aware everyone to ensure online safety for everyone. Whether you're a intermediate cybersecurity learner or just starting your journey into the world of cyber defense, you'll find a community of like-minded individuals eager to learn, share, and grow together.

About
Zero_logon is established in 2022, in the guidance of Syed Modassir Ali, (..,Solarwinds). 

Who are we: 
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

   Our Values:

    Knowledge Sharing: We believe in the power of collective learning and strive to create an environment where information is freely shared and discussed.

    Integrity: Trust and ethics are at the core of cybersecurity. We uphold high standards of integrity and professionalism in all our activities.`;

	const [showCommand, setShowCommand] = useState(false); // Control when to show "cat about.txt/"
	const [terminalContent, setTerminalContent] = useState("");
	const [index, setIndex] = useState(0);
	const [startTyping, setStartTyping] = useState(false); // Control when to start typing the full text

	useEffect(() => {
		// Delay the display of "cat about.txt/"
		const showCommandTimeout = setTimeout(() => {
			setShowCommand(true);
		}, 1500); // 1 second delay before showing the command

		// Delay the start of typing the rest of the content after "cat about.txt/" is shown
		const startTypingTimeout = setTimeout(() => {
			setStartTyping(true);
		}, 2000); // 2 seconds delay before starting to type the full text

		return () => {
			clearTimeout(showCommandTimeout);
			clearTimeout(startTypingTimeout);
		};
	}, []);

	useEffect(() => {
		if (startTyping && index < fullText.length) {
			const timeoutId = setTimeout(() => {
				setTerminalContent((prev) => prev + fullText[index]);
				setIndex(index + 1);
			}, 12);

			return () => clearTimeout(timeoutId);
		}
	}, [startTyping, index, fullText]);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 50) {
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

	return (
		<>
			<div className="about-back overflow-x-hidden lg:h-full md:h-[95vh] w-full">
				<Navbar scrolled={scrolled}/>
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div className="flex text-white no-scrollbar pt-32 h-full flex-col justify-center items-center relative">
						<div className="WitchMagic text-5xl animate-down relative flex flex-col items-center">
							{/* Hat image */}
							<div className="w-[50%] -left-[4.5rem] absolute lg:top-[-5.8rem] top-[-5rem] z-[2] -rotate-45">
								<img
									src={AboutHat}
									alt="About Hat"
									className="shadow-md glow-effect"
								/>
							</div>
							{/* Text */}
							<div className="z-[1] ">
								<span className="text-red-500 lg:text-6xl text-5xl">ABOUT</span>{" "}
								<span className="glow-white">US</span>
							</div>
						</div>
						<div className="h-[70vh] mb-6 lg:p-4 mt-4 overflow-x-hidden  no-scrollbar bg-[#2423237c] rounded-md w-[95%] lg:w-2/3">
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
								<div className="terminal_body h-full overflow-x-hidden overflow-auto">
									<div className="terminal_promt">
										<span className="terminal_user">z3r0_logon@admin:</span>
										<span className="terminal_location">~</span>
										<span className="terminal_bling">$</span>

										{/* Show "cat about.txt/" after delay */}
										{showCommand && (
											<div className="w-[80%] square-one ml-2">
												<pre className="text-white square-one text-[1rem]">
													cat about.txt
												</pre>
											</div>
										)}
									</div>

									{/* Start typing the content after the command */}
									{showCommand && (
										<div className="w-[80%] square-one ml-2 mt-4 text-white">
											<pre className="text-white text-[1rem]">
												{terminalContent}
											</pre>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
				<Footer />
		</>
	);
};

export default About;
