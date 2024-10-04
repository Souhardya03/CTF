// components/Loader/Footer.jsx
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
	return (
		<>
			<div className="bg-[] z-[999] h-full  w-full">
				<div
					className="p-4 flex justify-between items-center 
				 text-white WitchMagic">
					<p className="lg:text-xl text-sm">
						Team <span className="text-orange-400">Z3r0l0g0n</span>
					</p>
					<div className="text-sm lg:block hidden">
						All Rights Reserved <CopyrightIcon />{" "}
						<span className="">Z3R0_LOGON</span>
					</div>
					<div className="flex gap-3">
						<a
							rel="noreferrer"
							href="https://www.facebook.com/z3r0l0g0n?mibextid=ZbWKwL"
							target="_blank">
							<FacebookIcon />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/cybercell.jgec/?utm_source=qr&igsh=dWY1bjRjbm4zdmtq"
							target="_blank">
							<InstagramIcon />
						</a>
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/company/z3r0l0g0n/"
							target="_blank">
							<LinkedInIcon />
						</a>
						<a
							rel="noreferrer"
							href="https://x.com/z3r0_l0g0n?t=gFtHpJ_ibMGmfw8_IScAbw&s=08"
							target="_blank">
							<XIcon />
						</a>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Footer;
