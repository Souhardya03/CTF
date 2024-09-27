import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Rules.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import rules_stick from "../../assets/images/rules-stick.png";
import rule_back from "../../assets/images/rules-background.jpg"

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
			<div className="rules-back lg:min-h-screen flex justify-center w-full">
				{/* Optional: Uncomment if background image is needed */}
				{/* <img
          src={rulesback}
          alt="Background"
          className={`absolute top-0 left-0 w-full object-cover transition-opacity duration-500`}
        /> */}

				{/* Animation wrapper */}
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					{/* You can place animated content here */}
				

				{/* Content Section */}
				<div className="flex text-white w-full lg:pt-24 pt-20 flex-col justify-center items-center relative">
					<div className="MagnificentSerif lg:text-6xl relative flex flex-col text-5xl items-center">
						<div className=" ">
							<span className=" text-[#f48619] WitchMagic">RULES</span>
						</div>
						<div className="w-full">
							<img
								src={rules_stick}
								className="absolute glow-effect left-[1rem] w-[60%] -top-[3.9rem] lg:-top-[4.8rem] rotate-[255deg]"
								alt=""
							/>
						</div>
					</div>
					<ul className="text-white w-[90%] lg:w-[60%] flex-col gap-8 trick-or-treats rounded-md bg-[#3e3c3c89] flex  my-8 pl-10 px-8 p-4  ">
						<li className="text-sm lg:text-[18px] font-medium">
							This is a team-only event. You must either create a team during
							registration, join an existing team, or request an invite link
							from a team leader.
						</li>
						<li className=" text-sm lg:text-[18px] font-medium">
							Teams can have up to 5 members (including the Team Leader) and
							must be registered before the event.
						</li>
						<li className=" text-sm lg:text-[18px] font-medium">
							All team members can submit flags during the competition, but only
							the team leader can officially join the event.
						</li>
						<li className=" text-sm lg:text-[18px] font-medium">
							Denial of D-CTF’s infrastructure is strictly prohibited.
						</li>
						<li className=" text-sm lg:text-[18px] font-medium">
							Finding bugs in the D-CTF infrastructure can earn your team extra
							points.
						</li>
						<li className=" text-sm lg:text-[18px] font-medium">
							The golden rule: Hack before you get hacked!
						</li>
					</ul>
				</div>
        </motion.div>
			</div>
      
			<Footer />
		</div>
	);
};

export default Rules;
