import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
    return (
        <Box
            component="section"
            sx={{
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            {children}
        </Box>
    );
};

export default Section;
