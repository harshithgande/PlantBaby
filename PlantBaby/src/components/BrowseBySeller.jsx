import React from "react";
import "../styles.css";

const BrowseBySeller = () => {
    return (
        <section className="browse-by-seller">
            <div className="seller-hero">
                <h1>Browse by Seller</h1>
                <p>Explore a curated selection of plants and sustainable pots from our trusted sellers.</p>
            </div>
            <div className="seller-container">
                <div className="seller">
                    <img src="/images/seller1.jpg" alt="Green Thumb Nursery" className="seller-img" />
                    <div className="seller-info">
                        <h3>Green Thumb Nursery</h3>
                        <p>Specializing in indoor plants and rare species.</p>
                        <a href="/seller/green-thumb" className="btn">View Products</a>
                    </div>
                </div>
                <div className="seller">
                    <img src="/images/seller2.jpg" alt="EcoGrow Farms" className="seller-img" />
                    <div className="seller-info">
                        <h3>EcoGrow Farms</h3>
                        <p>Organic and sustainably sourced plants.</p>
                        <a href="/seller/ecogrow" className="btn">View Products</a>
                    </div>
                </div>
                <div className="seller">
                    <img src="/images/seller3.jpg" alt="Urban Jungle" className="seller-img" />
                    <div className="seller-info">
                        <h3>Urban Jungle</h3>
                        <p>Bringing nature to city spaces with stylish pots and plants.</p>
                        <a href="/seller/urban-jungle" className="btn">View Products</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseBySeller;