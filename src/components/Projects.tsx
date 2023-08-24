import { Box, Container, Fade, Typography, Link, Divider } from "@mui/material"
import { useState } from "react";
import { linkStyling } from "../styles/styles";

import ReactVisibilitySensor from "react-visibility-sensor";
import Project from "./Project";
import { listOfProjects } from "../data/config";

// PROJECTS
const Projects = () => {
    const [showContainer, setContainerVisibility] = useState(false);

    // RETURN ELEMENT
    return (
        <Box id="projects" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 13 }}>
                        <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                            <Link href="#projects" sx={linkStyling}>#</Link> Projects
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        {/* PROJECTS */}
                        <Box sx={{ py: 3 }}>
                            <Container maxWidth="lg">
                                {listOfProjects.map((projectData: any, index: number) => (
                                    <Project
                                        key={index}
                                        title={projectData.title}
                                        description={projectData.description}
                                        image={projectData.image}
                                        languages={projectData.languages}
                                    />
                                ))}
                            </Container>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}

export default Projects;
