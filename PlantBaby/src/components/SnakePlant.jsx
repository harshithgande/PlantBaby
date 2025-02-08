import React from "react";
import "../styles.css";

const SnakePlant = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img src="https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w" alt="Snake Plant" className="plant-detail-img" />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Snake Plant</h1>
                    <p className="plant-price">$20.00</p>
                    <p className="plant-description">
                        The Snake Plant is a hardy, low-maintenance plant perfect for beginners. It tolerates low light and is excellent for improving indoor air quality.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default SnakePlant;
