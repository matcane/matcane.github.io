import { PropsWithChildren } from "react";

import FlexBox from "../box/FlexBox";

const SectionBodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <FlexBox
            sx={{
                width: "80%",
                paddingX: { xs: "2rem", lg: "4rem" },
                flexDirection: "column",
            }}
        >
            {children}
        </FlexBox>
    );
};

export default SectionBodyWrapper;
