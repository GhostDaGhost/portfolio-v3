import { Typography, Link, Fade } from "@mui/material";
import { linkStyling, listItemStyling } from "../styles/styles";
import { ExperienceTabsProps } from "../interfaces";

import TabPanel from "./TabPanel";

// EXPERIENCE TABS
const ExperienceTabs = (props: ExperienceTabsProps) => {
    const { index } = props;

    // RETURN ELEMENT
    return (
        <>
            <TabPanel value={index} index={0}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            FC Associate I, Direct <Link href="https://amazon.com/" sx={linkStyling}>@ Amazon</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray">
                            October 2021 - Present
                        </Typography>

                        <ul className="ulist">
                            <li className="listitem" style={listItemStyling}>Process packages into and out of the site</li>
                            <li className="listitem" style={listItemStyling}>Lift and move heavy payload</li>
                            <li className="listitem" style={listItemStyling}>Receive and put away inventory</li>
                            <li className="listitem" style={listItemStyling}>Troubleshoot problems</li>
                            <li className="listitem" style={listItemStyling}>Work under various types of customer volumes (fast-paced, slow)</li>
                        </ul>
                    </div>
                </Fade>
            </TabPanel>

            <TabPanel value={index} index={1}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Freelance Full-Stack Developer
                        </Typography>

                        <Typography variant="subtitle1" color="gray">
                            November 2019 - Present
                        </Typography>

                        <ul className="ulist">
                            <li className="listitem" style={listItemStyling}>Developed software for various websites and gaming communities</li>
                            <li className="listitem" style={listItemStyling}>Created roadmaps with relevant timelines and release schedules</li>
                            <li className="listitem" style={listItemStyling}>Implemented issue tracking solutions and deployment processes</li>
                            <li className="listitem" style={listItemStyling}>Assisted consumers with inquiries</li>
                            <li className="listitem" style={listItemStyling}>Lead a development team through multiple projects, including delegating tasks, pair programming, and code reviews</li>
                            <li className="listitem" style={listItemStyling}>Familiarized myself with several programming languages, such as Lua, JavaScript, TypeScript, HTML/CSS, PHP</li>
                        </ul>
                    </div>
                </Fade>
            </TabPanel>
        </>
    )
}

export default ExperienceTabs;
