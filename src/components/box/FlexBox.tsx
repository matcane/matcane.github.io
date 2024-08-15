import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

type FlexBoxProps = PropsWithChildren<{
    sx?: object;
    fullWidth?: boolean;
}>;

const FlexBox = ({ sx, fullWidth, children }: FlexBoxProps) => {
    return (
        <Box
            width={fullWidth ? "100%" : "auto"}
            component="div"
            display="flex"
            alignItems="center"
            sx={{
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default FlexBox;
