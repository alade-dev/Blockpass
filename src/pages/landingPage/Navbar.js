/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo.png";

const NavBar = () => {
  return (
    <nav className="container flex justify-between mx-auto items-center px-8 py-4">
      {/* Logo and Brand Name */}
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="BlockPass Logo" className="h-8 mr-2" />
          <span className="text-white font-semibold text-lg">BlockPass</span>
        </div>
      </Link>
      {/* Navigation Links */}
      <div className="hidden items-center md:flex space-x-6">
        <Link
          to="/create"
          className="text-white hover:text-[#F5167E]  transition-colors duration-200"
        >
          Create
        </Link>
        <a
          href="#"
          className="text-white hover:text-[#F5167E]  transition-colors duration-200"
        >
          All Events
        </a>
        <a
          href="#"
          className="text-white hover:text-[#F5167E]  transition-colors duration-200"
        >
          Gallery
        </a>
        <a
          href="#"
          className="text-white hover:text-[#F5167E]  transition-colors duration-200"
        >
          Ticket
        </a>
        <a
          href="#"
          className="text-white hover:text-[#F5167E] transition-colors duration-200"
        >
          Contact
        </a>

        {/* Connect Button */}
        <a
          href="#"
          className="text-white bg-purple-800/30 hover:bg-purple-900 px-4 py-2  rounded-full transition-colors duration-200 ring-2 ring-white ring-opacity-50 hover:ring-opacity-75"
        >
          Connect
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

<nav className="container flex justify-between items-center px-8 py-4">
  <div className="text-white text-2xl font-bold">BlockPass</div>
  <div className="flex space-x-8 text-white">
    <span>Create</span>
    <span>All Events</span>
    <span>Gallery</span>
    <span>Ticket</span>
    <span>Contact</span>
    <button className="bg-purple-600 px-4 py-2 rounded-full">Connect</button>
  </div>
</nav>;
