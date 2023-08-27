import { Typography, Link, Fade } from "@mui/material";
import { linkStyling } from "../styles/styles";
import { EducationTabsProps } from "../interfaces";

import TabPanel from "./TabPanel";

// EXPERIENCE TABS
const EducationTabs = (props: EducationTabsProps) => {
    const { index } = props;

    // RETURN ELEMENT
    return (
        <>
            <TabPanel value={index} index={0}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Current Student <Link href="https://lwtech.edu/" sx={linkStyling}>@ Lake Washington Institute of Technology</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray" sx={{ mb: 2 }}>
                            July 2023 - Present
                        </Typography>

                        <Typography variant="body1" color="white">
                            Currently studying for my Associate of Arts and Sciences-Transfer (AAS-T) degree within Computing and Software Development.
                        </Typography>
                    </div>
                </Fade>
            </TabPanel>

            <TabPanel value={index} index={1}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Former Student <Link href="https://digipen.edu/" sx={linkStyling}>@ DigiPen Institute of Technology</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray" sx={{ mb: 2 }}>
                            September 2020 - June 2021
                        </Typography>

                        <Typography variant="body1" color="white">
                            Took a year-long WANIC course for Game Design (AP Computer Science Principles) where I utilized mostly the programming language, C.
                        </Typography>
                    </div>
                </Fade>
            </TabPanel>

            <TabPanel value={index} index={2}>
                <Fade in={true} timeout={1000}>
                    <div>
                        <Typography variant="h5" color="white">
                            Graduated Student <Link href="https://northcreek.nsd.org/" sx={linkStyling}>@ North Creek High School</Link>
                        </Typography>

                        <Typography variant="subtitle1" color="gray" sx={{ mb: 2 }}>
                            September 2017 - June 2021
                        </Typography>

                        <Typography variant="body1" color="white">
                            Graduated with a <span style={{ color: 'var(--main_color2_brighter)' }}>High School Diploma</span>.
                        </Typography>
                    </div>
                </Fade>
            </TabPanel>
        </>
    )
}

export default EducationTabs;
