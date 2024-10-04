import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Framer/Framer";
import Footer from "../Footer/Footer";
import Timer from "../Timer/Timer";
import home_back from "../../assets/images/home-background.jpg";

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadImage = async () => {
			const image = new Image();
			image.src = home_back; // Replace with your image path
			image.onload = () => {
				setLoading(false);
			};
		};

		loadImage();
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader-container">
					<div className="loader"></div>
				</div>
			) : (
				<>
					<Navbar />
					<div
						className="home-back home  h-[100vh] pt-[4rem] md:pt-40 lg:pt-0   overflow-x-hidden w-full"
						style={{
							backgroundImage: "../../assets/images/home-background.jpg",backgroundAttachment:"fixed"
						}}>
						<motion.div
							exit="out"
							animate="in"
							initial="init"
							variants={pageVariants}
							transition={pageTransition}>
							<div className={`relative z-10 transition-opacity duration-500`}>
								<div className="text-white lg:h-[91.7vh] flex justify-center  items-center flex-col p-6 ">
									<div className="lg:w-[60%] md:w-[70%] lg:pt-24">
										<div className="lg:text-5xl  md:text-5xl text-4xl fade-out text-center WitchMagic">
											<span className="text-glow">WELCOME TO </span>
											<span className="text-orange-500 lg:text-6xl MagnificentSerif">
												Z3R0D4Y
											</span>{" "}
											<span className="text-glow">CTF!</span>
										</div>
										<div className="text-center move-up text-[0.89rem] lg:text-lg md:text-lg trick-or-treats mt-8">
											October marks Cybersecurity Awareness Month, an important
											time to emphasize the need for online safety. As our lives
											become more digital, safeguarding personal and
											professional information is vital. This month serves as a
											reminder to adopt smart security practices, like using
											strong, unique passwords, enabling multi-factor
											authentication, and being careful with personal data. By
											staying informed and proactive, we can shield ourselves
											and our organizations from cyber threats, helping create a
											safer internet for all.
										</div>
									</div>
									<Timer />
								</div>
							</div>
						</motion.div>
					</div>
				</>
			)}
			<Footer />
		</>
	);
};

export default Home;
