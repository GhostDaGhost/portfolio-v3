import { Box, Typography } from "@mui/material";

import ProjectTool from "./ProjectTool";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// PROJECT VIEWING STYLING
const viewingButtonStyling: object = {
    '&:hover': {
        color: 'var(--main_color2)'
    },
    fontSize: 28,
    color: 'white',
    cursor: 'pointer',
    transition: '.2s'
}

// PROJECT
const Project = (props: ProjectProps) => {
    const { title, description, image, languages } = props;

    // RETURN ELEMENT
    return (
        <Box sx={{ p: 3, mb: 3, borderRadius: 3, bgcolor: 'rgba(0, 0, 0, .55)' }}>
            {/* DESKTOP / LARGE MONITORS */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <img
                        width="550"
                        src={new URL(`../assets/${image}`, import.meta.url).href}
                        alt="project picture"
                        draggable="false"
                        loading="lazy"
                    />
                </Box>

                <Box sx={{ ml: 6, py: 3 }}>
                    <Typography variant="h5" align="right" color="white" fontFamily="Open Sans" fontWeight={600} gutterBottom>
                        {title}
                    </Typography>

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="right"
                        color="darkgray"
                        fontFamily="Open Sans"
                        sx={{
                            mb: 2,
                            p: 1,
                            py: 1.45
                        }}
                    >
                        {description}
                    </Typography>

                    <Box display="flex" justifyContent="flex-end" sx={{ mb: 5 }}>
                        {languages.map(languageUsed => (
                            <ProjectTool name={languageUsed} />
                        ))}
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        <GitHubIcon sx={viewingButtonStyling} />
                        <OpenInNewIcon sx={{ ...viewingButtonStyling, ml: 2 }} />
                    </Box>
                </Box>
            </Box>

            {/* MOBILE / SMALL MONITORS */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>

            </Box>
        </Box>
    )
}

export default Project;
