import { Box, IconButton } from "@mui/material";
import { socialMediaLinks } from "../data/config";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

// NAVBAR ICON STYLING
const socialMediaIconStyling: object = {
    '&:hover': {
        transform: 'scale(1.2)',
        color: 'var(--main_color2)'
    },
    fontSize: 30,
    color: 'white',
    transition: '.2s'
};

// ICONS FOR EACH SOCIAL MEDIA
const socialMediaIcons: Record<string, any> = {
    GitHub: <GitHubIcon sx={socialMediaIconStyling} />,
    Instagram: <InstagramIcon sx={socialMediaIconStyling} />,
    X: <XIcon sx={socialMediaIconStyling} />,
    LinkedIn: <LinkedInIcon sx={socialMediaIconStyling} />,
    Email: <EmailIcon sx={socialMediaIconStyling} />
};

// SOCIALS
export default () => {
    return (
        <Box>
            {socialMediaLinks.map((socialLink: SocialPlatform, index: number) => (
                <IconButton key={index} href={socialLink.link} rel="noopener noreferrer" target="_blank" aria-label={socialLink.name}>
                    {(socialMediaIcons[socialLink.name])}
                </IconButton>
            ))}

            <IconButton href={new URL(`../assets/resume.pdf`, import.meta.url).href} rel="noopener noreferrer" target="_blank" aria-label="Resume">
                <DescriptionIcon sx={socialMediaIconStyling} />
            </IconButton>
        </Box>
    )
}
