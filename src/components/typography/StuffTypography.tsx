import { Typography } from "@mui/material";

const StuffTypography = ({
    title,
    descr,
}: {
    title?: string;
    descr?: string;
}) => {
    return (
        <Typography
            color="primary"
            width="100%"
            align={title ? "left" : "center"}
            sx={{
                fontSize: {
                    xs: 22,
                    lg: title ? 44 : 22,
                },
                marginBottom: descr ? "1rem" : "0rem",
            }}
        >
            {title}
            {descr}
        </Typography>
    );
};

export default StuffTypography;
