import React from "react";
import "../../App.css";

const Card = ({ image, name, role, socialLinks, department }) => (
	<div className="relative group w-[48%] md:w-[30%] lg:w-[20%] ">
		<div className="border border-[#5f5d5d] bg-[#242323e6]  w-full transition-all duration-300 ease-out  lg:p-6 p-2 rounded-lg shadow-lg flex flex-col justify-center items-center  transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-white">
			<div className="lg:h-[30vh] lg:w-[30vh] w-full lg:rounded-full rounded-md h-[24vh] overflow-hidden">
				<img
				    loading="lazy"
					src={image}
					alt={`${name}'s profile`}
					className="w-full h-full object-cover  mx-auto"
				/>
			</div>
			<div className="lg:text-[1.3rem] text-[0.95rem] font-semibold text-yellow-500 team_font text-center mt-3">
				{name}
			</div>
			<div className="text-white lg:text-sm text-xs font-medium  text-center">
				{role}
			</div>
			<div className="text-gray-400 font-medium  lg:text-sm text-xs mt-2 text-center">
				{department}
			</div>
			<div className="social-links   flex justify-center mb-4 mt-4 ">
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						className="hover:scale-110 lg:w-[35px] lg:h-[35px] duration-200 "
						rel="noopener noreferrer">
						<img
							loading="lazy"
							src={link.icon}
							alt={`${link.name} icon`}
							className="w-full glow-effect"
						/>
					</a>
				))}
			</div>
		</div>
	</div>
);

export default Card;
