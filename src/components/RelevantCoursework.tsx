import { Typography } from "@mui/material";
import { listItemStyling } from "../styles/styles";
import { educationCoursework } from "../data/config";

// RELEVANT COURSEWORK
export default ({ instituteName }: RelevantCourseworkProps) => {
    return (
        <>
            <Typography variant="body1" color="white" sx={{ mt: 3 }}>
                Relevant Coursework:
            </Typography>

            <ul className="ulist">
                {educationCoursework[instituteName].map((courseName: string, index: number) => (
                    <li key={index} className="listitem" style={listItemStyling}>{courseName}</li>
                ))}
            </ul>
        </>
    )
}
