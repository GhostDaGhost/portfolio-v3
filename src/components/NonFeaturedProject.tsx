import { Box, Typography, IconButton, Card, Divider } from "@mui/material";
import { viewingButtonStyling } from "../styles/styles";
import { NonFeaturedProjectProps } from "../interfaces";

import ProjectTool from "./ProjectTool";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// NON-FEATURED PROJECT
const NonFeaturedProject = (props: NonFeaturedProjectProps) => {
    const { title, description, toolsUsed, githubLink, siteLink } = props;

    // RETURN ELEMENT
    return (
        <Card variant="outlined" sx={{ width: 275, p: 3 }}>
            <Typography variant="h5" color="white" fontFamily="Open Sans" fontWeight={600} gutterBottom>
                {title}
            </Typography>

            <Typography component="p" variant="subtitle2" color="darkgray" fontFamily="Open Sans" sx={{ mb: 3 }}>
                {description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 1 }}>
                {toolsUsed?.map(toolUsed => (
                    <ProjectTool key={toolUsed} name={toolUsed} />
                ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
                {(githubLink && githubLink !== '') &&
                    <IconButton href={githubLink} target="_blank">
                        <GitHubIcon sx={viewingButtonStyling} />
                    </IconButton>
                }

                {(siteLink && siteLink !== '') && 
                    <IconButton href={siteLink} target="_blank">
                        <OpenInNewIcon sx={viewingButtonStyling} />
                    </IconButton>
                }
            </Box>
        </Card>
    )
}

export default NonFeaturedProject;
