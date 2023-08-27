import { Box } from "@mui/material";
import { TabPanelProps } from "../interfaces";

// TAB PANEL
const TabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props;

    // RETURN ELEMENT
    return (
        <>
            {value === index && 
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            }
        </>
    )
}

export default TabPanel;
