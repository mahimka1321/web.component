import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../redactor/home/Home';
import RedactorMenu from '../redactor/window.redactor/RedactorMenu';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Workspace" element={<RedactorMenu />} />
            </Routes>
        </div>
    );
};

export default Router;

