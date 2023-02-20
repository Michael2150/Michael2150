import React from "react";
import {Outlet} from "react-router-dom";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";

class PageLayout extends React.Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <Outlet/> {/* This is where the page content will be rendered */}
                <AppFooter/>
            </div>
        );
    }
}
export default PageLayout;