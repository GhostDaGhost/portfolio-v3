import { Tooltip, IconButton } from "@mui/material";
import { toolInformation } from "../data/config";

const toolsWithLocalImages: any = {
    'Netlify': true,
    'Vite': true,
    'Mantine': true,
    'Preact.js': true
};

// PROJECT TOOL
const ProjectTool = (props: ProjectToolProps) => {
    const { name } = props;

    // GET OFFICIAL LINK AND IMAGE URL OF THIS TOOL
    const thisTool = toolInformation[name];
    const imageURL = toolsWithLocalImages[name] ? new URL(`../assets/${thisTool.image}`, import.meta.url).href : thisTool.image;

    // RETURN ELEMENT
    return (
        <Tooltip title={name} placement="top" arrow>
            <IconButton href={thisTool.link} target="_blank">
                <img
                    width="32"
                    src={imageURL}
                    alt="project tool"
                    draggable="false"
                    loading="lazy"
                />
            </IconButton>
        </Tooltip>
    )
}

export default ProjectTool;
