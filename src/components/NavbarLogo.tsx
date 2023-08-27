import { Slide } from "@mui/material";
import Logo from "../assets/logo.png";

// NAVBAR LOGO
const NavbarLogo = (props: NavbarLogoProps) => {
    return (
        <Slide direction="right" in={props.showNavbarContents} timeout={650}>
            <img
                style={{ width: props.imageWidth }}
                src={Logo}
                alt="logo"
                draggable="false"
                loading="lazy"
            />
        </Slide>
    )
}

export default NavbarLogo;
