import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from '../app/home/Home';
import AboutTheProject from '../app/home/pages/page_1/AboutTheProject'; 
import HowItWorks from '../app/home/pages/page_3/HowItWorks'; 
import Detailed from '../app/home/pages/page_3/moreDetailed/Detailed'; 

import RedactorMenu from '../app/workspace/RedactorMenu';
import Title from '../app/workspace/Title';   


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

