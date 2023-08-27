import { Box } from "@mui/material";
import { BackgroundImageProps } from "../interfaces";

import BackgroundImageFile from '../assets/background.jpg';

// BACKGROUND IMAGE
const BackgroundImage = (props: BackgroundImageProps) => {
    return (
        <Box 
            sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                overflow: 'hidden',
                backgroundImage: `url(${BackgroundImageFile})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {props.children}
        </Box>
    )
}

export default BackgroundImage;
