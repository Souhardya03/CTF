import React from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"
const Register = () => {
	return (
		<>
		<Navbar/>
		<div className="register-back flex justify-center items-center h-[100vh]">
			<div className=" lg:w-1/2 bg-[#212020a5] rounded-md  h-full">
				<div className="text-3xl trick-or-treats text-orange-400 flex justify-center items-center h-full  font-bold text-center pt-5">
					Registration will start soon !!!
				</div>
				
			</div>
		</div>
		<Footer/>
		</>
	);
};

export default Register;
