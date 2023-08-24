import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { linkStyling } from "../styles/styles";

const AboutMe = () => {
    return (
        <Box id="about" component="section">
            <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 13 }}>
                <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                    <Link href="#about" sx={linkStyling}>#</Link> About Me
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    Hey, I'm Alexander Arizola, but I mostly go by Alex. I am a full-stack developer with the most proficiency in frontend.
                    In my free time, I enjoy hiking, spending time with family and friends, listening to any type of music, coding, and watching movies.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    Within my time in the development world, I experienced the roles of both as just a developer and a project lead. 
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    I hold experience with issue tracking and task management.
                    I've implemented task tracking processes using tools like <Link href="https://trello.com/" sx={linkStyling} target="_blank">Trello</Link> and <Link href="https://github.com/" sx={linkStyling} target="_blank">GitHub</Link> / <Link href="https://gitlab.com/" sx={linkStyling} target="_blank">GitLab</Link> issue tracking.
                    Keeping track of issues and ensuring that the correct department or developer is assigned to the relevant issues.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    As a developer, I have experience in several languages and tools.
                    For <Link href="https://mysql.com/" sx={linkStyling} target="_blank">database systems</Link>,
                    I utilize the 3NF approach, indexes, capable of optimizing queries using DBA tools, and able to maintain database security through the use of permissions and access control (like IP whitelisting).
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    As I used <Link href="https://php.net/" sx={linkStyling} target="_blank">PHP</Link>, I familiarized myself with object oriented programming, <Link href="https://laravel.com/" sx={linkStyling} target="_blank">Laravel framework</Link>, writing and using APIs and using the <Link href="https://laravel.com/docs/10.x/blade#introduction" sx={linkStyling} target="_blank">Blade templating engine</Link> (Laravel front end bits).
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    I speak, write and understand English expertly as my first language as well as being capable of understanding and speaking Spanish.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2, textDecoration: 'underline' }}>
                    Authorized to work in the United States for any employer.
                </Typography>
            </Container>
        </Box>
    )
}

export default AboutMe;
