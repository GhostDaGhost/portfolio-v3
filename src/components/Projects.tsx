import { Box, Container, Fade, Typography, Link, Divider, Grid, Button } from "@mui/material"
import { useState } from "react";

import { listOfProjects } from "../data/config";
import { linkStyling } from "../styles/styles";

import ReactVisibilitySensor from "react-visibility-sensor";
import Project from "./Project";
import NonFeaturedProject from "./NonFeaturedProject";

// PROJECTS
const Projects = () => {
    const [showContainer, setContainerVisibility] = useState(false);
    const [expandedNonFeaturedProjects, expandNonFeaturedProjects] = useState(false);
    const maxCardLimits = [5, 50];

    // GET FEATURED PROJECTS
    const featuredProjects: JSX.Element[] = [];
    listOfProjects.map((projectData: any) => {
        if (projectData.featured) {
            featuredProjects.push(projectData);
        }
    });
    
    // GET NON-FEATURED PROJECTS
    const nonFeaturedProjects: JSX.Element[] = [];
    listOfProjects.map((projectData: any) => {
        if (!projectData.featured) {
            nonFeaturedProjects.push(projectData);
        }
    });

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
                                <Box>
                                    <Typography variant="h5" color="white" fontFamily="Open Sans" sx={{ mb: 4 }}>
                                        Featured Projects:
                                    </Typography>

                                    {/* FEATURED PROJECTS */}
                                    {featuredProjects.map((projectData: any, index: number) => (
                                        <Project key={index} {...projectData} />
                                    ))}
                                </Box>

                                <Box>
                                    <Typography variant="h5" color="white" fontFamily="Open Sans" sx={{ mb: 4 }}>
                                        Other Projects:
                                    </Typography>

                                    {/* NON-FEATURED PROJECTS */}
                                    <Grid container spacing={4}>
                                        {nonFeaturedProjects.map((projectData: any, index: number) => (
                                            <Grid item hidden={index > maxCardLimits[expandedNonFeaturedProjects ? 1 : 0]} key={index} xs={12} sm={6} md={4}>
                                                <NonFeaturedProject key={index} {...projectData} />
                                            </Grid>
                                        ))}
                                    </Grid>

                                    <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                '&:hover': {
                                                    borderColor: 'var(--main_color2_brighter)',
                                                    color: 'var(--main_color2_brighter)'
                                                },
                                                fontSize: 18,
                                                borderColor: 'var(--main_color2)',
                                                color: 'var(--main_color2)'
                                            }}
                                            onClick={() => expandNonFeaturedProjects(!expandedNonFeaturedProjects)}
                                        >
                                            {expandedNonFeaturedProjects ? 'See Less' : 'See More'}
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}

export default Projects;
