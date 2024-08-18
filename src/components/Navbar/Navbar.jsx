import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
const Navbar = () => {
	return (
		<nav className="flex fixed top-0 justify-between px-4 z-10 bg-[#1a19193d] items-center w-full">
			<div className="flex items-center gap-2 ">
				<div className="text-white flex items-center justify-center rounded-full overflow-hidden">
					<img
						src={logo}
						alt=""
						className="w-16 h-16 object-center"
					/>
				</div>
				<div className="text-xl text-red-500 WitchMagic">Z3r0<span className="text-white">D4Y</span></div>
			</div>
			<div className="flex text-white scary-halloween gap-8">
				<NavLink
					to="/home"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Home
				</NavLink>

				<NavLink
					to="/rules"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Rules
				</NavLink>
				<NavLink to="/challenges">Challenges</NavLink>
				<NavLink
					to="/team"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Team
				</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink
					to="/about"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					About
				</NavLink>
			</div>
			<div className="border-2 flex justify-center scary-halloween rounded-full items-center p-2 px-4 border-orange-500">
				<div className="text-orange-500 ">Register</div>
			</div>
		</nav>
	);
};

export default Navbar;
