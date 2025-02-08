import React from "react";
import "../styles.css";

const FiddleLeafFig = () => {
    return (
        <section className="plant-detail">
            <div className="plant-detail-container">
                <img src="https://www.thesill.com/cdn/shop/files/the-sill_Fiddle-Leaf-Fig-Tree_Large_Pallas_Cream_Variant_8735f6bb-bb33-4d96-9858-13dc076566d8.jpg?v=1722535752&width=1445" alt="Fiddle Leaf Fig" className="plant-detail-img" />
                <div className="plant-detail-info">
                    <h1 className="plant-title">Fiddle Leaf Fig</h1>
                    <p className="plant-price">$25.00</p>
                    <p className="plant-description">
                        The Fiddle Leaf Fig is a statement piece for your home with its large, violin-shaped leaves. It thrives in bright, indirect sunlight and requires moderate watering. Perfect for enhancing your interior decor.
                    </p>
                    <button className="btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        </section>
    );
};

export default FiddleLeafFig;
