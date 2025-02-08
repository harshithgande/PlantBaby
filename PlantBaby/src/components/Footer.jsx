import React from "react";
import "../styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="subscribe-section">
                <h2>Subscribe with us</h2>
                <p>Stay updated with the latest collections and offers!</p>
                <input type="email" placeholder="Enter your email" className="subscribe-input" />
                <button className="btn">Subscribe</button>
            </div>
            <div className="footer-info">
                <p>© 2025 PlantBaby. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
