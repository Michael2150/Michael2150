import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageLayout from "./pages/page_layout";
import HomePage from "./pages/home_page";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route path="/" element={<HomePage/>}/>

                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;