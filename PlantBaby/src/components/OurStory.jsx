import React from "react";
import "../styles.css";

const OurStory = () => {
    return (
        <section className="our-story">
            <div className="story-hero">
                <h1>Our Story</h1>
                <p>Discover how PlantBaby started and our commitment to sustainability and plant lovers everywhere.</p>
            </div>
            <div className="story-content">
                <img src="/images/our-story.jpg" alt="Our Journey" className="story-img" />
                <div className="story-text">
                    <h2>Growing Together</h2>
                    <p>PlantBaby was founded with a simple mission: to make plant care easy and accessible for everyone. We partner with local nurseries to bring you the healthiest plants while supporting sustainable farming.</p>
                    <p>Our journey began with a love for greenery and a vision for a greener planet. Through ethical sourcing and community-driven initiatives, we aim to make a positive impact—one plant at a time.</p>
                </div>
            </div>
        </section>
    );
};

export default OurStory;