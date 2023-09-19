import { Box, Typography, IconButton, Divider } from "@mui/material";
import { viewingButtonStyling } from "../styles/styles";

import ProjectTool from "./ProjectTool";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// PROJECT
export default ({ title, description, image, toolsUsed, githubLink, siteLink }: ProjectProps) => {
    return (
        <Box
            sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                bgcolor: { xs: 'rgba(0, 0, 0, .75)', md: 'var(--main_color4)' },
                backgroundImage: { xs: `url(${new URL(`../assets/${image}`, import.meta.url).href})`, md: 'none' },
                backgroundBlendMode: 'darken',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* DESKTOP / LARGE MONITORS */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <img
                        width="550"
                        height="265"
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

                    <Box display="flex" justifyContent="flex-end" sx={{ mb: 3 }}>
                        {toolsUsed.map(toolUsed => (
                            <ProjectTool key={toolUsed} name={toolUsed} />
                        ))}
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        {(githubLink && githubLink !== '') &&
                            <IconButton href={githubLink} target="_blank" aria-label="Project's GitHub">
                                <GitHubIcon sx={viewingButtonStyling} />
                            </IconButton>
                        }

                        {(siteLink && siteLink !== '') && 
                            <IconButton href={siteLink} target="_blank" aria-label="Project's Link">
                                <OpenInNewIcon sx={viewingButtonStyling} />
                            </IconButton>
                        }
                    </Box>
                </Box>
            </Box>

            {/* MOBILE / SMALL MONITORS */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Typography variant="h6" color="white" fontFamily="Open Sans" fontWeight={600} gutterBottom>
                    {title}
                </Typography>

                <Typography component="p" variant="subtitle2" color="darkgray" fontFamily="Open Sans" sx={{ mb: 2 }}>
                    {description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box>
                    {toolsUsed.map(toolUsed => (
                        <ProjectTool key={toolUsed} name={toolUsed} />
                    ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box>
                    {(githubLink && githubLink !== '') &&
                        <IconButton href={githubLink} target="_blank" aria-label="Project's GitHub">
                            <GitHubIcon sx={viewingButtonStyling} />
                        </IconButton>
                    }

                    {(siteLink && siteLink !== '') && 
                        <IconButton href={siteLink} target="_blank" aria-label="Project's Link">
                            <OpenInNewIcon sx={viewingButtonStyling} />
                        </IconButton>
                    }
                </Box>
            </Box>
        </Box>
    )
}
