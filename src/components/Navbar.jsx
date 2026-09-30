import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Logo from "./logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Logo />

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About &amp; Visit</NavLink>
      </div>

      <div className="nav-actions">
        <button className="reserve-btn">Reserve Table</button>

        <button className="profile-btn">
          <FaUser />
        </button>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;