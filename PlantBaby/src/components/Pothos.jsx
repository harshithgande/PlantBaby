import React from "react";
import "../styles.css";

const Pothos = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img
                    src="https://www.plantvine.com/plants/Jade-Pothos-3G-HB-Variation-800x1000.jpg"
                    alt="Pothos"
                    className="plant-detail-img"
                />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Pothos</h1>
                    <p className="plant-price">$12.00</p>
                    <p className="plant-description">
                        Pothos is an easy-care plant with trailing vines and heart-shaped leaves. It thrives in a variety of light conditions and requires minimal watering, making it perfect for busy plant lovers.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default Pothos;
