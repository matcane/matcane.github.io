import { PropsWithChildren } from "react";

import FlexBox from "../box/FlexBox";

const SectionMyStuffWrapper = ({
    tabletPadding,
    children,
}: PropsWithChildren<{ tabletPadding: boolean }>) => {
    return (
        <FlexBox
            sx={{
                width: "100%",
                overflow: "auto",
                paddingTop: tabletPadding ? "0rem" : "6rem",
                paddingX: {
                    xs: "2rem",
                    sm: "0rem",
                    lg: "14rem",
                    xl: "20rem",
                },
                flexDirection: "column",
                boxSizing: "border-box",
            }}
        >
            {children}
        </FlexBox>
    );
};

export default SectionMyStuffWrapper;
