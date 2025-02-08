import React from "react";
import "../styles.css";

const PeaceLily = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img src="https://cdn11.bigcommerce.com/s-dblrqw/images/stencil/1280x1280/products/775/1833/peace_lily_8__79629.1709737829.jpg?c=2" alt="Peace Lily" className="plant-detail-img" />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Peace Lily</h1>
                    <p className="plant-price">$18.00</p>
                    <p className="plant-description">
                        The Peace Lily is a graceful plant that blooms white flowers and purifies the air. It thrives in moderate, indirect sunlight.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default PeaceLily;
