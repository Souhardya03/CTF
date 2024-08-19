import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import WitchStick from "../../assets/images/witch-stick.png";


const Team = () => {
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
			<div className="about-back overflow-x-hidden h-[100vh] w-full">
				<Navbar scrolled={scrolled}/>
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div className="flex text-white lg:pt-40 pt-24 flex-col justify-center items-center relative">
						<div className="WitchMagic lg:text-5xl relative flex flex-col text-4xl items-center">
							
							{/* Text */}
							<div className="z-[1] ">
								<span className="glow-white lg:text-5xl">MEET OUR</span> <span className=" text-red-500">TEAM</span>
							</div>
                            <div className="w-full">
                                <img src={WitchStick} className="absolute glow-effect left-[3rem] w-[80%] -top-[4.6rem] lg:-top-[6.2rem] rotate-[215deg]" alt="" />
                            </div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Team;
