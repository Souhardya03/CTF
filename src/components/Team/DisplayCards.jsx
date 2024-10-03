import React from "react";
import Card from "./Card.jsx";
import IMG from "../../assets/images/Kamado.Tanjirou.600.2883168.jpg";
import Purbayan from "./images/Purbayan.jpg";
import Kaustav from "./images/Kaustav.jpg";
import Swagata from "./images/Swagata.jpg";
import Adil from "./images/Adil.jpg";
import Soham from "./images/Soham.jpg";
import Anjali from "./images/Anjali.jpg";
import Souhardya from "./images/Souhardya.jpg";
import Sandyda from "./images/Sandyda.jpg";
import Linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";

const people = [
	{
		image: Purbayan,
		name: "Purbayan Kr. Das",
		role: "Event Head & Challenge Creator",
		department: "ECE'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/purb03ragnarok",
				icon: twitter,
				// icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/purbayan-kumar-das-350037256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/purb03ragnarok",
				icon: github,
			},
		],
	},
	{
		image: Kaustav,
		name: "Kaustav Das",
		role: "Event Head & Challenge Creator",
		department: "EE'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/Kaustav25821",
				icon: twitter,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/kaustav258",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://x.com/Kaustav25821",
				icon: github,
			},
		],
	},
	{
		image: IMG,
		name: "Pankaj Barman",
		role: "Challenge Creator",
		department: "CSE'25, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "",
				icon: twitter,
			},
			{
				name: "LinkedIn",
				url: "",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "",
				icon: github,
			},
		],
	},
	{
		image: Adil,
		name: "Adil Hossain Sana",
		role: "Challenge Creator",
		department: "ME'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/adilhossainsana",
				icon: twitter,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/adil-hossain-sana-366871283",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/SpiderSec101",
				icon: github,
			},
		],
	},
	{
		image: Sandyda,
		name: "Sandipan Chatterjee",
		role: "Server Management",
		department: "CSE'25, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://Twitter.com/sandipan2003",
				icon: twitter,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/sandipan-chatterjee-jgec/",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/sandy3002",
				icon: github
			},
		],
	},
	{
		image: Swagata,
		name: "Swagata Mondal",
		role: "Social Media Team",
		department: "ECE'26, JGEC",
		socialLinks: [
			// { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/swagata-mondal-809968255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/p4n7h3r-driod",
				icon: github
			},
		],
	},

	{
		image: Soham,
		name: "Soham Ahmed Molla",
		role: "Design Team",
		department: "ECE'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/sohamahmed_01",
				icon: twitter
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/soham-ahmed-molla-29b381254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/sohamahmed01",
				icon: github
			},
		],
	},
	{
		image: Anjali,
		name: "Anjali Singh",
		role: "Web Team",
		department: "CSE'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/sigmafemale1602",
				icon: twitter
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/anjali-singh-49aa55255/",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/kookie3478",
				icon: github,
			},
		],
	},
	{
		image: Souhardya,
		name: "Souhardya Deb",
		role: "Web Team",
		department: "ECE'26, JGEC",
		socialLinks: [
			{
				name: "Twitter",
				url: "https://x.com/DarkWarrio28389",
				icon: twitter
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/souhardya-deb-921578254/",
				icon: Linkedin,
			},
			{
				name: "Github",
				url: "https://github.com/Souhardya03",
				icon: github
			},
		],
	},
];

const CardList = () => (
	<div className=" flex flex-wrap lg:px-6 justify-center  w-full gap-2 lg:gap-8 mt-14 grid-cols-2">
		{people.map((person, index) => (
			<Card
				key={index}
				image={person.image}
				name={person.name}
				role={person.role}
				socialLinks={person.socialLinks}
				department={person.department}
			/>
		))}
	</div>
);

export default CardList;
