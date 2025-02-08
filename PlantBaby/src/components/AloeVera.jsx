import React from "react";
import "../styles.css";

const AloeVera = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img src="https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__1368841_pe957973_s5.jpg" alt="Aloe Vera" className="plant-detail-img" />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Aloe Vera</h1>
                    <p className="plant-price">$15.00</p>
                    <p className="plant-description">
                        Aloe Vera is both an attractive plant and a useful one, known for its soothing gel. It thrives in bright sunlight and requires minimal watering.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default AloeVera;
