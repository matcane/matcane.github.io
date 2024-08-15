import { PropsWithChildren } from "react";

import FlexBox from "../box/FlexBox";

const SectionMyStuffBodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <FlexBox
            sx={{
                width: "100%",
                paddingTop: "1rem",
                paddingX: {
                    xs: "0rem",
                    sm: "2rem",
                    lg: "0rem",
                },
                flexDirection: "column",
                boxSizing: "border-box",
            }}
        >
            {children}
        </FlexBox>
    );
};

export default SectionMyStuffBodyWrapper;
