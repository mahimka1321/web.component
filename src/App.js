import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from './app/home/Home';
import AboutTheProject from './app/home/pages/page_1/AboutTheProject'; 

import SliderP from './app/home/pages/page_1/SliderP'; 
import HeaderP from './app/home/pages/page_1/HeaderP'; 
import GlP from './app/home/pages/page_1/GlP'; 

import HowItWorks from './app/home/pages/page_3/HowItWorks'; 
import Detailed from './app/home/pages/page_3/moreDetailed/Detailed'; 
import RedactorMenu from './app/workspace/RedactorMenu';
import Prototype from './app/workspace/Title';   
import Reg from './Reg';
 
function App() {
    return (
        <div className="app">
            {/*
            <Link className="link-btn pointer" to="/workspace">Жмяк</Link>
            <Link className="link-btn pointer" to="/reg">ЖмякЖмякЖмякЖмяк</Link>
            */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutTheProject />} />
                <Route path="/works" element={<HowItWorks />} /> 
                <Route path="/works/detailed" element={<Detailed />} />
                <Route path="/workspace" element={<RedactorMenu />} />
                <Route path="/workspace/prototype" element={<Prototype />} />
                <Route path="/reg" element={<Reg />} />

                <Route path="/sliderP" element={<SliderP />} />
                <Route path="/headerP" element={<HeaderP />} />
                <Route path="/glP" element={<GlP />} />
            </Routes>
        </div>
    );
}

export default App;
