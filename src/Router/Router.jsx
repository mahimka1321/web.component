import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from '../redactor/home/Home';
import AboutTheProject from '../redactor/home/AboutTheProject'; 
import HowItWorks from '../redactor/home/HowItWorks'; 
import Detailed from '../redactor/home/Detailed'; 

import RedactorMenu from '../redactor/window.redactor/RedactorMenu';
import Title from '../redactor/window.redactor/Title';   


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutTheProject />} />
                <Route path="/works" element={<HowItWorks />} /> 
                <Route path="/works/detailed" element={<Detailed />} />
                <Route path="/workspace" element={<RedactorMenu />} />
                <Route path="/workspace/prototype" element={<Title />} />
            </Routes>
        </div>
    );
};

export default Router;

