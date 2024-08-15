import { Typography } from "@mui/material";

type HeroTypographyProps = {
    size: "sm" | "lg";
    align?: "left" | "center" | "right";
    text: string;
};

const HeroTypography = ({
    size,
    align = "center",
    text,
}: HeroTypographyProps) => {
    const fontSizes = {
        sm: { xs: 20, lg: 24 },
        lg: { xs: 24, lg: 44 },
    };
    const textAlign = {
        xs: "center",
        md: align,
    };
    return (
        <Typography
            color="white"
            sx={{ fontSize: fontSizes[size], textAlign: textAlign }}
        >
            {text}
        </Typography>
    );
};

export default HeroTypography;
