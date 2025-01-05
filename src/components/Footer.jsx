import React from "react";
import "./Footer.css";
import { AiOutlineHome, AiOutlineBook, AiOutlineEnvironment, AiOutlineHistory } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <nav class="mobile-nav">
                <a href="/" class="bloc-icon">
                    <span><AiOutlineHome /></span>
                </a>
                <a href="/book-appointment" class="bloc-icon">
                    <span><AiOutlineBook /></span>
                </a>
                <a href="/location" class="bloc-icon">
                    <span><AiOutlineEnvironment /></span>
                </a>
                <a href="/history" class="bloc-icon">
                    <span><AiOutlineHistory /></span>
                </a>
            </nav>
        </footer>
    )
}
export default Footer;