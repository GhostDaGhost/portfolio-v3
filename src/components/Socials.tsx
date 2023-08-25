import { Box, IconButton } from "@mui/material";
import { socialMediaLinks } from "../data/config";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
const socialMediaIcons: any = {
    'GitHub': <GitHubIcon sx={socialMediaIconStyling} />,
    'Instagram': <InstagramIcon sx={socialMediaIconStyling} />,
    'Twitter': <TwitterIcon sx={socialMediaIconStyling} />,
    'LinkedIn': <LinkedInIcon sx={socialMediaIconStyling} />,
    'Email': <EmailIcon sx={socialMediaIconStyling} />
};

// SOCIALS
const Socials = () => {
    return (
        <Box>
            {socialMediaLinks.map((socialLink: any, index: number) => (
                <IconButton key={index} href={socialLink.link} rel="noopener noreferrer" target="_blank">
                    {(socialMediaIcons[socialLink.name])}
                </IconButton>
            ))}
        </Box>
    )
}

export default Socials;
