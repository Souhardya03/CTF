import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Navbar = ({ scrolled }) => {
    return (
        <nav
            className={`flex fixed top-0 justify-between items-center px-4  p-1 z-10 w-full transition-colors duration-300 ${
                scrolled ? 'bg-[#1a1919f6]' : 'bg-[#1a19193d]'
            }`}
        >
            <div className="flex items-center gap-2">
                <div className="text-white flex items-center justify-center rounded-full overflow-hidden">
                    <img
                        src={logo}
                        alt=""
                        className="lg:w-16 lg:h-16 w-12 h-12 object-center"
                    />
                </div>
                <div className="text-xl text-red-500 WitchMagic">
                    Z3r0<span className="text-white">D4Y</span>
                </div>
            </div>
            <div className="lg:flex hidden text-white scary-halloween gap-8">
                <NavLink
                    to="/home"
                    style={({ isActive }) =>
                        isActive ? { color: "rgb(249,115,22)" } : {}
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/rules"
                    style={({ isActive }) =>
                        isActive ? { color: "rgb(249,115,22)" } : {}
                    }
                >
                    Rules
                </NavLink>
                <NavLink
                    to="/team"
                    style={({ isActive }) =>
                        isActive ? { color: "rgb(249,115,22)" } : {}
                    }
                >
                    Team
                </NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? { color: "rgb(249,115,22)" } : {}
                    }
                >
                    About
                </NavLink>
            </div>
            <div className="border-2 flex justify-center scary-halloween rounded-full items-center p-2 px-4 border-orange-500">
                <div className="text-orange-500">Register</div>
            </div>
        </nav>
    );
};

export default Navbar;
