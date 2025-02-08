import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Home = () => {
    return (
        <section className="home">
            <div className="hero">
                <img
                    src="https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="PlantBaby Hero"
                    className="hero-img"
                />
                <h1 className="hero-title">Welcome to PlantBaby</h1>
            </div>

            <div className="section-title">
                <h2>Best Sellers</h2>
            </div>

            <div className="plant-panel-container">
                <div className="plant-panel">
                    <img src="https://www.thesill.com/cdn/shop/files/the-sill_Fiddle-Leaf-Fig-Tree_Large_Pallas_Cream_Variant_8735f6bb-bb33-4d96-9858-13dc076566d8.jpg?v=1722535752&width=1445" alt="Fiddle Leaf Fig" className="plant-panel-img" />
                    <h3>Fiddle Leaf Fig</h3>
                    <p>$25.00</p>
                    <Link to="/fiddle-leaf-fig" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w" alt="Snake Plant" className="plant-panel-img" />
                    <h3>Snake Plant</h3>
                    <p>$20.00</p>
                    <Link to="/snake-plant" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://www.thesill.com/cdn/shop/files/the-sill_Medium-Monstera-Deliciosa_Medium_Isabella_Stone_Variant_b68d0a34-b068-4105-a15c-7d1b22ba6b29.jpg?v=1737133270&width=1946" alt="Monstera Deliciosa" className="plant-panel-img" />
                    <h3>Monstera Deliciosa</h3>
                    <p>$30.00</p>
                    <Link to="/monstera-deliciosa" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__1368841_pe957973_s5.jpg" alt="Aloe Vera" className="plant-panel-img" />
                    <h3>Aloe Vera</h3>
                    <p>$15.00</p>
                    <Link to="/aloe-vera" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://cdn11.bigcommerce.com/s-dblrqw/images/stencil/1280x1280/products/775/1833/peace_lily_8__79629.1709737829.jpg?c=2" alt="Peace Lily" className="plant-panel-img" />
                    <h3>Peace Lily</h3>
                    <p>$18.00</p>
                    <Link to="/peace-lily" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://www.thesill.com/cdn/shop/files/the-sill_ficus_elastica_upcycled-planter_small_avocado_1.jpg?v=1736446645" alt="Rubber Plant" className="plant-panel-img" />
                    <h3>Rubber Plant</h3>
                    <p>$22.00</p>
                    <Link to="/rubber-plant" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://www.plantvine.com/plants/Jade-Pothos-3G-HB-Variation-800x1000.jpg" alt="Pothos" className="plant-panel-img" />
                    <h3>Pothos</h3>
                    <p>$12.00</p>
                    <Link to="/pothos" className="btn">Shop Now</Link>
                </div>
                <div className="plant-panel">
                    <img src="https://www.thesill.com/cdn/shop/files/the-sill_Small-ZZ-Plant_creamrockefeller.jpg?v=1738695519&width=1946" alt="ZZ Plant" className="plant-panel-img" />
                    <h3>ZZ Plant</h3>
                    <p>$25.00</p>
                    <Link to="/zz-plant" className="btn">Shop Now</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
