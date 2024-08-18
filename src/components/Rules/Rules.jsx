import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Rules.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";

const Rules = () => {
	return (
		<>
			<div className="rules-back h-full  w-full">
				{/* <img
				src={rulesback}
				alt="Background"
				className={`absolute top-0 left-0 w-full   object-cover  transition-opacity duration-500 
				`}
				/> */}
				<Navbar />
				<motion.div
					exit="out"
					animate="in"
					initial="init"
					variants={pageVariants}
					transition={pageTransition}>
					<div
						className={`  transition-opacity overflow-x-hidden duration-500 `}>
						<div className="text-white no-scrollbar mt-14  h-[84.1vh] flex justify-center overflow-y-auto items-center flex-col p-14 ">
							<div className="w-[70%] flex flex-col mt-48 items-center justify-center">
								<div className="text-6xl fade-out flex justify-center items-center Frightmare ">
									Rules
								</div>
								<div className=" move-up flex flex-col justify-center FREAKYHALLOWEEN mt-4">
									<div className="flex items-center justify-center gap-2">
										<div className="text-[35px] text-orange-400">E</div>
										<div className="trick-or-treats text-lg pt-3">
											Participants are allowed to use any tool (online /
											offline) for solving the challenges
										</div>
									</div>
									<div className="flex items-center gap-1">
										<div className="text-[35px] text-orange-400">A</div>
										<div className="trick-or-treats text-lg pt-3">
											Flag sharing is strictly prohibited. It will cause ban
											from the CTF for both the players
										</div>
									</div>
									<div className="flex items-center pl-2 gap-2">
										<div className="text-[35px] text-orange-400">L</div>
										<div className="trick-or-treats text-lg pt-3">
											The time duration of the CTF is 2.30 hours
										</div>
									</div>
									<div className="flex items-center pl-4 gap-2">
										<div className="text-[35px] text-orange-400">T</div>
										<div className="trick-or-treats text-lg pt-3">
											Any type of attack on the CTF website is strictly
											prohibited
										</div>
									</div>
								</div>
							</div>
							<div className="w-[70%] flex flex-col items-center justify-center">
								<div className="text-6xl pt-14 fade-out flex justify-center items-center Frightmare ">
									FAQs
								</div>
								<div className=" move-up flex flex-col justify-center FREAKYHALLOWEEN mt-4">
									<div className="flex  gap-2">
										<div className="text-[35px] text-orange-400">E</div>
										<div className="flex flex-col justify-center">
											<div className="trick-or-treats text-lg pt-4">
												What is the SLAY_CTF?
											</div>
											<div className="scary-halloween pl-4">
												SLAY_CTF is an hybrid mode jeopardy-CTF competition.
												"Capture The Flag" (CTF) competitions are not related to
												running outdoors or playing first-person shooters.
												Instead, they consist of a set of computer security
												puzzles (or challenges) involving reverse-engineering,
												memory corruption, cryptography, web technologies, and
												more. When players solve them they get a "flag", a
												secret string which can be exchanged for points. The
												more points a player earns, the higher up they move in
												rank.
											</div>
										</div>
									</div>
									<div className="flex items-center gap-1">
										<div className="text-[35px] text-orange-400">A</div>
										<div className="trick-or-treats text-lg pt-3">
											Flag sharing is strictly prohibited. It will cause ban
											from the CTF for both the players
										</div>
									</div>
									<div className="flex items-center pl-2 gap-2">
										<div className="text-[35px] text-orange-400">L</div>
										<div className="trick-or-treats text-lg pt-3">
											The time duration of the CTF is 2.30 hours
										</div>
									</div>
									<div className="flex items-center pl-4 gap-2">
										<div className="text-[35px] text-orange-400">T</div>
										<div className="trick-or-treats text-lg pt-3">
											Any type of attack on the CTF website is strictly
											prohibited
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

export default Rules;
