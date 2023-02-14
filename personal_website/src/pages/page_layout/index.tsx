import React from "react";
import {Outlet, Link } from "react-router-dom";
class PageLayout extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-Header">
                    <div className="Left" >
                        <h1>My Website</h1>
                    </div>
                    <div className="Middle">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                <Outlet/> {/* This is where the page content will be rendered */}

                <div className="App-Footer">

                </div>
            </div>
        );
    }
}
export default PageLayout;