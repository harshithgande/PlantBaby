import React from "react";
import "../styles.css";

const Plants = () => {
    return (
        <section className="plants">
            <div className="plants-hero">
                <h1>Our Plants</h1>
                <p>Explore our diverse selection of beautiful and sustainable plants.</p>
            </div>
            <div className="plant-container">
                <div className="plant-row">
                    <div className="plant">
                        <img src="/images/plant1.jpg" alt="Fiddle Leaf Fig" className="plant-img" />
                        <h3>Fiddle Leaf Fig</h3>
                        <p>$25.00</p>
                        <a href="/plants/fiddle-leaf-fig" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant2.jpg" alt="Snake Plant" className="plant-img" />
                        <h3>Snake Plant</h3>
                        <p>$20.00</p>
                        <a href="/plants/snake-plant" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant3.jpg" alt="Monstera Deliciosa" className="plant-img" />
                        <h3>Monstera Deliciosa</h3>
                        <p>$30.00</p>
                        <a href="/plants/monstera-deliciosa" className="btn">View Details</a>
                    </div>
                </div>
                <div className="plant-row">
                    <div className="plant">
                        <img src="/images/plant4.jpg" alt="Aloe Vera" className="plant-img" />
                        <h3>Aloe Vera</h3>
                        <p>$15.00</p>
                        <a href="/plants/aloe-vera" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant5.jpg" alt="Peace Lily" className="plant-img" />
                        <h3>Peace Lily</h3>
                        <p>$18.00</p>
                        <a href="/plants/peace-lily" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant6.jpg" alt="Rubber Plant" className="plant-img" />
                        <h3>Rubber Plant</h3>
                        <p>$22.00</p>
                        <a href="/plants/rubber-plant" className="btn">View Details</a>
                    </div>
                </div>
                <div className="plant-row">
                    <div className="plant">
                        <img src="/images/plant7.jpg" alt="Pothos" className="plant-img" />
                        <h3>Pothos</h3>
                        <p>$12.00</p>
                        <a href="/plants/pothos" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant8.jpg" alt="ZZ Plant" className="plant-img" />
                        <h3>ZZ Plant</h3>
                        <p>$25.00</p>
                        <a href="/plants/zz-plant" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant9.jpg" alt="Fern" className="plant-img" />
                        <h3>Fern</h3>
                        <p>$18.00</p>
                        <a href="/plants/fern" className="btn">View Details</a>
                    </div>
                </div>
                <div className="plant-row">
                    <div className="plant">
                        <img src="/images/plant10.jpg" alt="Dracaena" className="plant-img" />
                        <h3>Dracaena</h3>
                        <p>$28.00</p>
                        <a href="/plants/dracaena" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant11.jpg" alt="Cactus" className="plant-img" />
                        <h3>Cactus</h3>
                        <p>$10.00</p>
                        <a href="/plants/cactus" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant12.jpg" alt="Bamboo Palm" className="plant-img" />
                        <h3>Bamboo Palm</h3>
                        <p>$22.00</p>
                        <a href="/plants/bamboo-palm" className="btn">View Details</a>
                    </div>
                </div>
                <div className="plant-row">
                    <div className="plant">
                        <img src="/images/plant13.jpg" alt="Lavender" className="plant-img" />
                        <h3>Lavender</h3>
                        <p>$16.00</p>
                        <a href="/plants/lavender" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant14.jpg" alt="Orchid" className="plant-img" />
                        <h3>Orchid</h3>
                        <p>$35.00</p>
                        <a href="/plants/orchid" className="btn">View Details</a>
                    </div>
                    <div className="plant">
                        <img src="/images/plant15.jpg" alt="Rosemary" className="plant-img" />
                        <h3>Rosemary</h3>
                        <p>$12.00</p>
                        <a href="/plants/rosemary" className="btn">View Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plants;
