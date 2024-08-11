import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between p-4 items-center w-full">
			<div className="text-white">Logo</div>
			<div className="flex text-white scary-halloween gap-8">
				<NavLink to="/home" style={({ isActive }) =>
                isActive ? { color: "rgb(249,115,22)" } : {}
              }>Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/rules">Rules</NavLink>
				<NavLink to="/team">Team</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
			<div className="border-2 flex justify-center scary-halloween rounded-full items-center p-2 px-4 border-orange-500" >
				<div className="text-orange-500 ">Register</div>
			</div>
		</div>
	);
};

export default Navbar;
