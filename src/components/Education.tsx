import { Box, Container, Typography, Divider, Tab, Link, Fade } from "@mui/material";
import { useState } from "react";
import { linkStyling, tabStyling } from "../styles/styles";
import { EducationProps } from "../interfaces";

import ReactVisibilitySensor from "react-visibility-sensor";
import EducationTabs from "./EducationTabs";
import TabContainer from "./TabContainer";

// EDUCATION
const Education = (props: EducationProps) => {
    const [showContainer, setContainerVisibility] = useState(false);
    const { index, onTabChange } = props;

    // RETURN ELEMENT
    return (
        <Box id="education" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 5 }}>
                        <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                            <Link href="#education" sx={linkStyling}>#</Link> Education
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', p: 2, bgcolor: 'var(--main_color4)', borderRadius: 2 }}>
                            {/* DESKTOP / LARGE MONITORS */}
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <TabContainer alignment="horizontal" index={index} tabType="Education" onChange={onTabChange}>
                                    <Tab label='Lake Washington Institute of Technology' sx={tabStyling} />
                                    <Tab label='DigiPen Institute of Technology' sx={tabStyling} />
                                    <Tab label='North Creek High School' sx={tabStyling} />
                                </TabContainer>

                                <EducationTabs index={index} />
                            </Box>

                            {/* MOBILE / SMALL MONITORS */}
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <TabContainer alignment="horizontal" index={index} tabType="Education" onChange={onTabChange}>
                                    <Tab label='LWTech' sx={tabStyling} />
                                    <Tab label='DigiPen' sx={tabStyling} />
                                    <Tab label='NCHS' sx={tabStyling} />
                                </TabContainer>

                                <EducationTabs index={index} />
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}

export default Education;
