import { Tooltip } from "@mui/material";
import { toolImages } from "../data/config";

const toolsWithLocalImages: any = {
    'Netlify': true,
    'Vite': true,
    'Mantine': true,
    'Preact.js': true
};

// PROJECT TOOL
const ProjectTool = (props: ProjectToolProps) => {
    const { name } = props;
    const imageURL = toolsWithLocalImages[name] ? new URL(`../assets/${toolImages[name]}`, import.meta.url).href : toolImages[name];

    // RETURN ELEMENT
    return (
        <Tooltip title={name} placement="top" arrow>
            <img
                width="35"
                src={imageURL}
                style={{
                    marginLeft: 15
                }}
                alt="project tool"
                draggable="false"
                loading="lazy"
            />
        </Tooltip>
    )
}

export default ProjectTool;
