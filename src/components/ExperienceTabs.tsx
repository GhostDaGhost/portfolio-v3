import { Typography, Link, Fade } from "@mui/material";
import { linkStyling, listItemStyling } from "../styles/styles";

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

            <TabPanel value={index} index={1}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Retail Store Associate I <Link href="https://amazon.com/" sx={linkStyling}>@ Amazon</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray">
                            October 2021 - Present
                        </Typography>

                        <ul className="ulist">
                            <li className="listitem" style={listItemStyling}>Responsible for critical tasks to enhance customer experience.</li>
                            <li className="listitem" style={listItemStyling}>Tasks include inventory management, order picking facilitation, and returns handling.</li>
                            <li className="listitem" style={listItemStyling}>Occasionally provide peer training to new team members.</li>
                            <li className="listitem" style={listItemStyling}>Consistently deliver exceptional service.</li>
                            <li className="listitem" style={listItemStyling}>Efficiently manage high customer volumes.</li>
                        </ul>
                    </div>
                </Fade>
            </TabPanel>

            <TabPanel value={index} index={2}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Personal Shopper <Link href="https://safeway.com/" sx={linkStyling}>@ Safeway</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray">
                            January 2024 - Present
                        </Typography>

                        <ul className="ulist">
                            <li className="listitem" style={listItemStyling}>Meticulously picked products for online customers' orders and ensured top-notch selections</li>
                            <li className="listitem" style={listItemStyling}>Handled refunds, service calls over the phone from customers</li>
                        </ul>
                    </div>
                </Fade>
            </TabPanel>
        </>
    )
}

export default ExperienceTabs;
