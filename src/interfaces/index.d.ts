interface NavbarLogoProps {
    imageWidth: string;
    showNavbarContents: boolean;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface TabContainerProps {
    alignment: string;
    index: number;
    onChange: any;
    tabType: string;
    children?: React.ReactNode;
}

interface IntroductionProps {
    showNameAndTitle: boolean;
}

interface ExperienceTabsProps {
    index: number;
}

interface EducationTabsProps {
    index: number;
}

interface ExperienceProps {
    index: number;
    onTabChange: any;
}

interface EducationProps {
    index: number;
    onTabChange: any;
}

interface BackgroundImageProps {
    children?: React.ReactNode;
}

interface MobileNavigationMenuButtonProps {
    name: string;
}

interface NavbarProps {
    setMobileNavMenuVisibility: any;
}

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    languages: string[];
}

interface ProjectToolProps {
    name: string;
}
