import React from "react";
import "./Prizes.css";
import witch_stick from "../../assets/images/skull.png";
const Prizes = () => {
	return (
		<div className="min-h-screen pt-14 flex justify-center  bg-transparent">
			<div className="relative">
				<div className="absolute -top-[10em] z-[1]  w-[100%]  glow-effect rotate-[3deg]">
					<img
						src={witch_stick}
						className=""
						alt=""
					/>
				</div>
				<div className="text-5xl underline text-orange-500 z-[2] font-bold nosifer-regular relative shadow-lg ">
					Prizes
				</div>
			</div>
		</div>
	);
};

export default Prizes;
