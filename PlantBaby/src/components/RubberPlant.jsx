import React from "react";
import "../styles.css";

const RubberPlant = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img
                    src="https://www.thesill.com/cdn/shop/files/the-sill_ficus_elastica_upcycled-planter_small_avocado_1.jpg?v=1736446645"
                    alt="Rubber Plant"
                    className="plant-detail-img"
                />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Rubber Plant</h1>
                    <p className="plant-price">$22.00</p>
                    <p className="plant-description">
                        The Rubber Plant is a stunning houseplant with large, glossy leaves. It thrives in bright, indirect sunlight and requires moderate watering. A great choice to add elegance to your space.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default RubberPlant;
