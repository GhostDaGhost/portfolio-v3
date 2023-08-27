import { Box, Typography } from '@mui/material';
import { MobileNavigationMenuButtonProps } from '../interfaces';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// MOBILE NAVIGATION MENU BUTTON
const MobileNavigationMenuButton = (props: MobileNavigationMenuButtonProps) => {
    const { name } = props;

    // RETURN ELEMENT
    return (
        <Box sx={{ px: 3, py: 1.55 }}>
            <Typography
                component="a"
                href={`#${name.toLowerCase()}`}
                variant="h5"
                sx={{
                    '&:hover': {
                        color: 'var(--main_color2_brighter)'
                    },
                    fontFamily: 'Open Sans',
                    color: 'white',
                    cursor: 'pointer',
                    transition: '.23s',
                    textDecoration: 'none'
                }}
            >
                <PlayArrowIcon sx={{ fontSize: 21, color: 'var(--main_color2)' }} /> {name}
            </Typography>
        </Box>
    )
}

export default MobileNavigationMenuButton;
