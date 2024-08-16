import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex fixed top-0 justify-between p-4 z-10 bg-[#1a19193d] items-center w-full">
			<div className="text-white">Logo</div>
			<div className="flex text-white scary-halloween gap-8">
				<NavLink to="/home" style={({ isActive }) =>
                isActive ? { color: "rgb(249,115,22)" } : {}
              }>Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/rules" style={({ isActive }) =>
                isActive ? { color: "rgb(249,115,22)" } : {}
              }>Rules</NavLink>
				<NavLink to="/team">Team</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
			<div className="border-2 flex justify-center scary-halloween rounded-full items-center p-2 px-4 border-orange-500" >
				<div className="text-orange-500 ">Register</div>
			</div>
		</nav>
	);
};

export default Navbar;
