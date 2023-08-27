import { Box, Container, Typography, Divider, Tab, Link, Fade } from "@mui/material";
import { useState } from "react";
import { ExperienceProps } from "../interfaces";
import { linkStyling, tabStyling } from "../styles/styles";

import ReactVisibilitySensor from "react-visibility-sensor";
import ExperienceTabs from "./ExperienceTabs";
import TabContainer from "./TabContainer";

// EXPERIENCE
const Experience = (props: ExperienceProps) => {
    const [showContainer, setContainerVisibility] = useState(false);
    const { index, onTabChange } = props;

    // RETURN ELEMENT
    return (
        <Box id="experience" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 5 }}>
                        <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                            <Link href="#experience" sx={linkStyling}>#</Link> Experience
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', p: 2, bgcolor: 'var(--main_color4)', borderRadius: 2 }}>
                            {/* DESKTOP / LARGE MONITORS */}
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <TabContainer alignment="horizontal" index={index} tabType="Experience" onChange={onTabChange}>
                                    <Tab label='Amazon' sx={tabStyling} />
                                    <Tab label='Freelance Dev' sx={tabStyling} />
                                </TabContainer>

                                <ExperienceTabs index={index} />
                            </Box>

                            {/* MOBILE / SMALL MONITORS */}
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <TabContainer alignment="horizontal" index={index} tabType="Experience" onChange={onTabChange}>
                                    <Tab label='Amazon' sx={tabStyling} />
                                    <Tab label='Freelance Dev' sx={tabStyling} />
                                </TabContainer>

                                <ExperienceTabs index={index} />
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}

export default Experience;
