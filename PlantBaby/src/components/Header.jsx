import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <Link to="/">
                        <img src="https://files.oaiusercontent.com/file-Ktz38XbX9F2TP9Lc2a6Aoc?se=2025-02-08T00%3A04%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dlogo.png&sig=a%2BRV2j/GiPhSM%2BntshckbNhGWLm7TGx860vtXvXc2Qk%3D" alt="PlantBaby Logo" className="logo-img" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/our-story">Our Story</Link></li>
                    <li><Link to="/plants">Plants</Link></li>
                    <li><Link to="/sustainable-pots">Sustainable Pots</Link></li>
                    <li><Link to="/browse-by-seller">Browse by Seller</Link></li>
                </ul>
                <div className="nav-icons">
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;