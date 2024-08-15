import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

import MotionDiv from "../components/animation/MotionDiv";
import Section from "../components/box/Section";
import SectionStuffHeader from "../components/header/SectionStuffHeader";
import StuffImage from "../components/image/StuffImage";
import StuffChipList from "../components/list/StuffChipList";
import StuffTypography from "../components/typography/StuffTypography";
import SectionMyStuffBodyWrapper from "../components/wrapper/SectionMyStuffBodyWrapper";
import SectionMyStuffWrapper from "../components/wrapper/SectionMyStuffWrapper";
import stuffData from "../data/stuffData";
import { useOpen } from "../hooks/useOpen";

const MyStuff = () => {
    const { stuffSlug } = useParams();
    const { open } = useOpen();
    const currentData = stuffData[stuffSlug as keyof typeof stuffData];

    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Section>
            <MotionDiv open={open} fullWidth scroll>
                <SectionMyStuffWrapper tabletPadding={isSmScreen}>
                    <StuffImage img={currentData.img} />
                    <SectionMyStuffBodyWrapper>
                        <SectionStuffHeader data={currentData} />
                        <StuffChipList stack={currentData.stack} />
                        <StuffTypography descr={currentData.description} />
                    </SectionMyStuffBodyWrapper>
                </SectionMyStuffWrapper>
            </MotionDiv>
        </Section>
    );
};

export default MyStuff;
