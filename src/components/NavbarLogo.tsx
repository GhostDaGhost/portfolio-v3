import { Slide } from "@mui/material";
import Logo from "../assets/logo.png";

// NAVBAR LOGO
export default ({ showNavbarContents, imageSize }: NavbarLogoProps) => {
    return (
        <Slide direction="right" in={showNavbarContents} timeout={650}>
            <img
                width={imageSize}
                height={imageSize}
                src={Logo}
                alt="logo"
                draggable="false"
            />
        </Slide>
    )
}
