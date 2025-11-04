import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#483D8B] flex items-center h-20 xl:h-[17vh] justify-between px-6 py-2 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-[70px] w-[70px] xl:h-[90px] xl:w-[90px] rounded-full p-1"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-bold text-lg xl:text-xl 2xl:text-xl font-serif text-white">
        <Link to="/" className="hover:text-purple-300 transition">Home</Link>
        <Link to="/about-us" className="hover:text-purple-300 transition">About Us</Link>
        <div className="dropdown dropdown-hover">
          <Link to="/yoga-classes" className="hover:text-purple-300 transition">Yoga Classes</Link>
          {/* Uncomment if you need dropdown later */}
        </div>
        <Link to="/contact-us" className="hover:text-purple-300 transition">Contact Us</Link>
        <Link to="/blog" className="hover:text-purple-300 transition">Blogs</Link>
        {/* <Link to="/write-for-us" className="hover:text-purple-300 transition">Write For Us</Link> */}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-[#483D8B] flex flex-col items-center space-y-4 py-4 font-bold text-lg text-white font-serif shadow-md md:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/yoga-classes" onClick={() => setIsOpen(false)}>Yoga Classes</Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
          {/* <Link to="/write-for-us" onClick={() => setIsOpen(false)}>Write For Us</Link> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
