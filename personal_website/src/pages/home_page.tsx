import React from "react";
import AppIntro from "../components/app-intro";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import PortfolioSection from "../components/portfolio-section";
import ContactSection from "../components/contact-section";
import {Divider} from "semantic-ui-react";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <AppIntro/>
                <Divider section/>
                <AboutSection/>
                <Divider section/>
                <ExperienceSection/>
                <Divider section/>
                <PortfolioSection/>
                <Divider section/>
                <ContactSection/>
                <Divider hidden section/>
            </div>
        );
    }
}
export default HomePage;