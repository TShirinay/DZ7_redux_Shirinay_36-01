import React from 'react';
import {Route, Routes} from "react-router-dom";
import Page1 from "./PageThree";
import PageThree from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Page1/>}/>
            <Route path='/pageOne' element={<PageOne/>}/>
            <Route path='/pageTwo' element={<PageTwo/>}/>
            <Route path='/pageThree' element={<PageThree/>}/>
        </Routes>
    );
};

export default Pages;