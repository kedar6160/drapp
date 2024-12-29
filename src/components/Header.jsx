
import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
return(
    <header className="header">
        <div className="logo">Dr. John Doe</div>
        <nav className="nav">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/book-appointment" className="appointment-button">Book an Appointment</Link>
        </nav>
      </header>
)
};
export default Header;