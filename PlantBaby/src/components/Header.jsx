import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
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