import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../redactor/home/Home';
import RedactorMenu from '../redactor/window.redactor/RedactorMenu';
import Title from '../redactor/window.redactor/Title';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Workspace" element={<RedactorMenu />} />
                <Route path="/Workspace/Title" element={<Title />} />
            </Routes>
        </div>
    );
};

export default Router;

