import React from "react";
import "../../App.css";

const Card = ({ image, name, role, socialLinks }) => (
	<div className="relative group">
		<div className="border border-[#5f5d5d] bg-[#2423239a]  w-full transition-all duration-300 ease-out  lg:p-6 p-2 rounded-lg shadow-lg flex flex-col justify-center items-center  transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-white">
			<div className="lg:h-[30vh] lg:w-[30vh]  lg:rounded-full rounded-md h-[25vh] overflow-hidden">
				<img
					src={image}
					alt={`${name}'s profile`}
					className="w-full h-full object-cover  mx-auto"
				/>
			</div>
			<div className="lg:text-xl text-[0.95rem] font-semibold text-yellow-500 text-center mt-4">{name}</div>
			<div className="text-white lg:text-lg text-sm text-center">{role}</div>
			<div className="social-links flex justify-center mb-4 mt-4 ">
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={link.icon}
							alt={`${link.name} icon`}
							className="w-full"
						/>
					</a>
				))}
			</div>
		</div>
	</div>
);

export default Card;
