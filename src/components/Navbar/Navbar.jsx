import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ scrolled }) => {
	const [openNav, setopenNav] = useState(false);
	return (
		<nav
			className={`flex fixed top-0 justify-between items-center lg:px-4 px-2  p-1 z-10 w-full transition-colors duration-300 ${
				scrolled ? "bg-[#1a1919f6]" : "bg-[#1a191983]"
			}`}>
			<div className="flex items-center   gap-2">
				<div className="text-white flex w-full items-center justify-center rounded-full overflow-hidden">
					<img
						src={logo}
						alt=""
						className="lg:w-16 lg:h-16 w-12 h-12 "
					/>
				</div>
				<div className="text-xl text-red-500 WitchMagic">
					Z3r0<span className="text-white">D4Y</span>
				</div>
			</div>
			<div
				className={`flex lg:flex-row lg:relative absolute duration-200 justify-center lg:bg-transparent flex-col top-[4rem] lg:h-full h-[20vh] rounded-md ${
					openNav ? "opacity-100 border-2 border-orange-500" : " opacity-0 pointer-events-none"
				} lg:opacity-100 lg:pointer-events-auto opacity-0 right-2 lg:top-0  text-center bg-[#141313ec] text-white scary-halloween gap-2 w-[40%] md:w-[20%] lg:p-0 p-4 lg:w-1/2  lg:gap-8`}>
				<NavLink
					to="/home"
					className="hover:text-orange-500 duration-150 hover:scale-105"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Home
				</NavLink>
				<NavLink
					to="/rules"
					className="hover:text-orange-500 duration-150 hover:scale-105"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Rules
				</NavLink>
				<NavLink
					to="/team"
					className="hover:text-orange-500 duration-150 hover:scale-105"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					Team
				</NavLink>
				
				<NavLink
					to="/about"
					className="hover:text-orange-500 duration-150 hover:scale-105"
					style={({ isActive }) =>
						isActive ? { color: "rgb(249,115,22)" } : {}
					}>
					About
				</NavLink>
			</div>
			<div className="flex gap-2">
				<NavLink
					to="https://ctf.zerologon.co.in"
					target="_blank"
					className="border-2 flex justify-center scary-halloween rounded-full items-center p-2 lg:px-4 text-sm lg:text-lg border-orange-500">
					<div className="text-orange-500">Register</div>
				</NavLink>
				<div
					className="border-2 lg:hidden flex justify-center scary-halloween rounded-md text-orange-500 items-center lg:p-2 px-2 border-orange-500"
					onClick={() => setopenNav(!openNav)}>
					<MenuIcon />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
