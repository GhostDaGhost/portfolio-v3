import { Tooltip, IconButton } from "@mui/material";
import { toolInformation } from "../data/config";

const toolsWithLocalImages: any = {
    'Netlify': true,
    'Vite': true,
    'Mantine': true,
    'Preact.js': true,
    'Lua': true
};

// PROJECT TOOL
export default ({ name }: ProjectToolProps) => {
    const thisTool = toolInformation[name];
    const imageURL = toolsWithLocalImages[name] ? new URL(`../assets/${thisTool.image}`, import.meta.url).href : thisTool.image;

    // RETURN ELEMENT
    return (
        <Tooltip title={name} placement="top" arrow>
            <IconButton href={thisTool.link} target="_blank" aria-label={name}>
                <img
                    width="32"
                    height="32"
                    src={imageURL}
                    alt="project tool"
                    draggable="false"
                    loading="lazy"
                />
            </IconButton>
        </Tooltip>
    )
}
