import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { linkStyling } from "../styles/styles";

export default () => {
    return (
        <Box id="about" component="section">
            <Container maxWidth="xl" sx={{ minHeight: '99vh', py: 13 }}>
                <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                    <Link href="#about" sx={linkStyling}>#</Link> About Me
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    Hi, my name is Alex.
                    I'm a graduate of North Creek High School and currently an undergraduate at Lake Washington Institute of Technology, pursuing a degree in Computing and Software Development.
                    My goal is to complete my Associate of Arts and Sciences Transfer degree and continue on to earn my Bachelor's.
                    In my free time, I enjoy coding, listening to music, watching sunsets, spending time with my dogs Charlie and Marcie, and staying active at the gym.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    Since November 2019, I have gained hands-on experience in the software engineering field through freelance projects, delivering solutions across various areas and deepening my technical expertise.
                    Despite not yet having formal work experience in the tech industry, I have built a strong skill set in programming and software development.
                    I am proficient in languages such as Lua, TypeScript, and SQL, and I have experience working with frameworks like jQuery and React.
                    Additionally, I am familiar with GitHub for version control, enabling effective collaboration and project management.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    As part of my studies at Lake Washington Institute of Technology, I am expanding my knowledge by learning languages such as C#, Python, and Java.
                    These academic and freelance experiences have honed my technical abilities, strengthened my adaptability, and equipped me with problem-solving skills to handle diverse and challenging tasks.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    I speak, write and understand English expertly as my first language as well as being capable of understanding and speaking Spanish.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2 }}>
                    I am currently seeking an employment opportunity or internship as a front-end developer to apply my skills and contribute to a growing and strong team.
                </Typography>

                <Typography component="p" variant="body1" fontFamily="Open Sans" color="white" sx={{ mb: 2, textDecoration: 'underline' }}>
                    Authorized to work in the United States for any employer.
                </Typography>
            </Container>
        </Box>
    )
}
