import React from "react";
import "../styles.css";

const MonsteraDeliciosa = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img src="https://www.thesill.com/cdn/shop/files/the-sill_Medium-Monstera-Deliciosa_Medium_Isabella_Stone_Variant_b68d0a34-b068-4105-a15c-7d1b22ba6b29.jpg?v=1737133270&width=1946" alt="Monstera Deliciosa" className="plant-detail-img" />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Monstera Deliciosa</h1>
                    <p className="plant-price">$30.00</p>
                    <p className="plant-description">
                        Known as the \"Swiss Cheese Plant,\" the Monstera Deliciosa is famous for its fenestrated leaves. It thrives in bright, indirect sunlight and adds a tropical vibe to any room.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default MonsteraDeliciosa;
