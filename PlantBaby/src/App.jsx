import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Plants from "./components/Plants";
import BrowseBySeller from "./components/BrowseBySeller";
import OurStory from "./components/OurStory";
import FiddleLeafFig from "./components/FiddleLeafFig";
import SnakePlant from "./components/SnakePlant";
import MonsteraDeliciosa from "./components/MonsteraDeliciosa";
import AloeVera from "./components/AloeVera";
import PeaceLily from "./components/PeaceLily";
import RubberPlant from "./components/RubberPlant";
import Pothos from "./components/Pothos";
import ZZPlant from "./components/ZZPlant";
import "./styles.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plants" element={<Plants />} />
                    <Route path="/browse-by-seller" element={<BrowseBySeller />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/fiddle-leaf-fig" element={<FiddleLeafFig />} />
                    <Route path="/snake-plant" element={<SnakePlant />} />
                    <Route path="/monstera-deliciosa" element={<MonsteraDeliciosa />} />
                    <Route path="/aloe-vera" element={<AloeVera />} />
                    <Route path="/peace-lily" element={<PeaceLily />} />
                    <Route path="/rubber-plant" element={<RubberPlant />} />
                    <Route path="/pothos" element={<Pothos />} />
                    <Route path="/zz-plant" element={<ZZPlant />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
