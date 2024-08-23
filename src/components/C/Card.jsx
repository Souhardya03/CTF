import React from "react";
import "../../App.css";

const Card = ({ image, name, role, socialLinks }) => (
    <div className="group relative p-4">
    <div className="card transition-all duration-300 ease-out p-6 rounded-lg shadow-lg transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-white">
      <img src={image} alt={`${name}'s profile`} className="card-image w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-600 text-center">{role}</p>
      <div className="social-links flex justify-center mt-4 space-x-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={`${link.name} icon`} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
