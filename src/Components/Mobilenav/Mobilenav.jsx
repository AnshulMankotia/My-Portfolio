import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Mobilenav.css";
import { Link } from "react-scroll";
const Mobilenav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Anshul.</h3>
      <nav ref={navRef}>
        <Link activeClass="active" to="Navbar" spy={true} smooth={true}  onClick={showNavbar}>
          {" "}
          Home
        </Link>
        <Link to="services" spy={true} smooth={true}  onClick={showNavbar}>
          Serivces
        </Link>
        <Link to="works" spy={true} smooth={true}  onClick={showNavbar}>
          Experience{" "}
        </Link>
        <Link to="portfolio" spy={true} smooth={true}  onClick={showNavbar}>
          {" "}
          Protfolio
        </Link>
        <Link to="testimonial" spy={true} smooth={true} onClick={showNavbar}>
          Testimonial
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Mobilenav;
