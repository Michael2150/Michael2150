import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import PageLayout from "./pages/page_layout";
import HomePage from "./pages/home_page";
import AboutPage from "./pages/about_page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>

                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;