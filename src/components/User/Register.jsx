/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import register_back from "../../assets/images/register-back.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const [userdata, setUserdata] = useState({
		fullname: "",
		name: "",
		email: "",
		password: "",
	});
	const [message, setMessage] = useState("");

	// Define the CTFd API base URL and your API key
	const CTFD_API_KEY =
		"ctfd_6a499b8d95198c3b93add4cffb5ff296fe1404eca2cab87b350a7da08cd8d93e"; // Replace with your CTFd API token

	const handleAddUser = async (e) => {
		e.preventDefault();
		if (
			userdata.fullname === "" ||
			userdata.name === "" ||
			userdata.email === "" ||
			userdata.password === ""
		) {
			toast.error("Please fill all the fields");
		} else
			try {
				// Make the API request to add the user
				const response = await fetch("/api/v1/users", {
					// mode:"no-cors",
					method: "POST",
					headers: {
						Authorization: `Token ${CTFD_API_KEY}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: userdata.name,
						email: userdata.email,
						password: userdata.password,
						type: "user",
					}),
				});

				if (response.status === 200) {
					toast.success("Registered Successfully!");
					handlegoogleSubmit();
					// navigate("http://20.117.241.255/login")
					window.location.replace("https://ctf.zerologon.co.in/login");
				} else {
					toast.error("User already exists");
				}
			} catch (error) {
				console.error("Error adding user:", error);
				setMessage("Error adding user.");
			}
	};

	const handlegoogleSubmit = async (e) => {
		fetch("https://sheetdb.io/api/v1/nba7v3ecmxfyc", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				data: [
					{
						fullname: userdata.fullname,
						username: userdata.name,
						email: userdata.email,
					},
				],
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadImage = async () => {
			const image = new Image();
			image.src = register_back;
			image.onload = () => {
				setLoading(false);
			};
		};

		loadImage();
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > 20) {
				console.log("scroll");
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	if (loading) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}
	const handlechange = (e) => {
		setUserdata({ ...userdata, [e.target.name]: e.target.value });
	};

	return (
		<div className="register-back">
			<Navbar scrolled={scrolled} />
			<form
				onSubmit={handleAddUser}
				className="wrapper">
				<div className="login_box mt-20 mb-8 ">
					<div className="login-header WitchMagic text-xs">
						<span>Register</span>
					</div>

					<div className="input_box">
						<input
							type="text"
							id="fullname"
							name="fullname"
							value={userdata.fullname}
							onChange={handlechange}
							className="input-field"
							required={true}
							placeholder=""
						/>
						<label
							htmlFor="fullname"
							className="label">
							Name
						</label>
						<i className="bx bx-user icon"></i>
					</div>

					<div className="input_box">
						<input
							type="text"
							id="name"
							name="name"
							value={userdata.name}
							onChange={handlechange}
							className="input-field"
							required
							placeholder=""
						/>
						<label
							htmlFor="name"
							className="label">
							Username
						</label>
						<i className="bx bx-user icon"></i>
					</div>

					<div className="input_box">
						<input
							type="email"
							id="email"
							name="email"
							value={userdata.email}
							onChange={handlechange}
							className="input-field"
							required
							placeholder=""
						/>
						<label
							htmlFor="email"
							className="label">
							Email
						</label>
						<i className="bx bx-user icon"></i>
					</div>

					<div className="input_box">
						<input
							type="password"
							id="password"
							name="password"
							value={userdata.password}
							onChange={handlechange}
							className="input-field"
							required
							placeholder=""
						/>
						<label
							htmlFor="password"
							className="label">
							Password
						</label>
						<i className="bx bx-lock-alt icon"></i>
					</div>

					<div className="input_box">
						<input
							type="submit"
							className="input-submit"
							value="Submit"
							onClick={handleAddUser}
						/>
					</div>
					<div className="text-center">
						Already registered, Let's start{" "}
						<span className=" font-medium WitchMagic cursor-pointer">
							<NavLink
								className="text-orange-500 underline"
								target="_blank"
								to="http://20.117.241.255/login">
								Hacking
							</NavLink>
						</span>
					</div>
				</div>
			</form>

			<Footer />
		</div>
	);
};

export default Register;
