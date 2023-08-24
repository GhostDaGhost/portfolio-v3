import { Box, Container, Fade, Typography } from "@mui/material";
import Socials from "./Socials";

// INTRODUCTION
const Introduction = (props: IntroductionProps) => {
    return (
        <Box id="home" component="section">
            <Container maxWidth="xl" sx={{ minHeight: '89vh', py: 15, userSelect: 'none' }}>
                <Fade in={true} timeout={1000}>
                    <Typography variant="h6" fontFamily="Open Sans" color="white" sx={{ mb: 1 }}>
                        Hi there,
                    </Typography>
                </Fade>

                <Fade in={props.showNameAndTitle} timeout={2000}>
                    <div>
                        <Typography variant="h3" fontFamily="Open Sans" fontWeight={600} color="white" sx={{ mb: 1 }}>
                            I'm Alex
                        </Typography>

                        <Typography variant="h5" fontFamily="Open Sans" color="white" sx={{ mb: 4 }}>
                            Full Stack Developer
                        </Typography>

                        <Typography variant="h6" fontFamily="Open Sans" color="gray" sx={{ mb: 4 }}>
                            A guy just living in a world where technology constantly evolves.
                        </Typography>

                        <Socials />
                    </div>
                </Fade>
            </Container>
        </Box>
    )
}

export default Introduction;
