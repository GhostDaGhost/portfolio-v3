import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";

import Introduction from "../components/Introduction";
import BackgroundImage from "../components/BackgroundImage";
import MobileNavigationMenu from "../components/MobileNavigationMenu";
import Footer from "../components/Footer";

// HOME
const Home = () => {
    const [showNameAndTitle, setNameAndTitleVisibility] = useState(false);
    const [showMobileNavMenu, setMobileNavMenuVisibility] = useState(false);

    const [currentExperienceTabIndex, setCurrentExperienceTabIndex] = useState(0);
    const [currentEducationTabIndex, setCurrentEducationTabIndex] = useState(0);
 
    // TABS CHANGE HANDLER
    const onTabChange = (typeOfTab: string, tabIndex: number) => {
        if (typeOfTab === 'Experience') {
            setCurrentExperienceTabIndex(tabIndex);
        } else if (typeOfTab === 'Education') {
            setCurrentEducationTabIndex(tabIndex);
        }
    }

    // SHOW NAME AND TITLE AFTER SOME TIME
    useEffect(() => {
        setTimeout(() => {
            setNameAndTitleVisibility(true);
        }, 1400);
    }, []);

    // RETURN ELEMENT
    return (
        <BackgroundImage>
            {showMobileNavMenu && <MobileNavigationMenu setMobileNavMenuVisibility={setMobileNavMenuVisibility} />}

            <Box sx={{ height: '100vh', overflowX: 'hidden', overflowY: 'scroll' }}>
                <Navbar setMobileNavMenuVisibility={setMobileNavMenuVisibility} />

                <Box component="main">
                    <Introduction showNameAndTitle={showNameAndTitle} />
                    <AboutMe />

                    <Experience index={currentExperienceTabIndex} onTabChange={onTabChange} />
                    <Education index={currentEducationTabIndex} onTabChange={onTabChange} />

                    <Projects />
                    <Contact />
                </Box>

                <Footer />
            </Box>
        </BackgroundImage>
    )
}

export default Home;
