import { PropsWithChildren } from "react";

import FlexBox from "../box/FlexBox";

const SectionContactBodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <FlexBox
            sx={{
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
                justifyContent: "center",
                width: "100%",
                gap: "2rem",
            }}
        >
            {children}
        </FlexBox>
    );
};

export default SectionContactBodyWrapper;
