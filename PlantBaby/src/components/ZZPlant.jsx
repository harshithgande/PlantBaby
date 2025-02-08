import React from "react";
import "../styles.css";

const ZZPlant = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img
                    src="https://www.thesill.com/cdn/shop/files/the-sill_Small-ZZ-Plant_creamrockefeller.jpg?v=1738695519&width=1946"
                    alt="ZZ Plant"
                    className="plant-detail-img"
                />
                <div className="plant-detail-info">
                    <h1 className="plant-title">ZZ Plant</h1>
                    <p className="plant-price">$25.00</p>
                    <p className="plant-description">
                        The ZZ Plant is a hardy, low-maintenance houseplant with glossy, dark green leaves. It thrives in low to moderate light and requires minimal watering, making it perfect for beginners or busy plant enthusiasts.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default ZZPlant;
