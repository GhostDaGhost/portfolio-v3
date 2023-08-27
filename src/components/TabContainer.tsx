import { Tabs } from "@mui/material";
import { TabContainerProps } from "../interfaces";

// TAB CONTAINER
const TabContainer = (props: TabContainerProps) => {
    return (
        <Tabs
            variant="scrollable"
            orientation={props.alignment as any}
            value={props.index}
            onChange={(_e, index) => props.onChange(props.tabType, index)}
            scrollButtons
            allowScrollButtonsMobile
            aria-label={`${props.alignment} Tabs Showing Experience`}
        >
            {props.children}
        </Tabs>
    )
}

export default TabContainer;
