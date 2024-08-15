import MotionDiv from "../components/animation/MotionDiv";
import Section from "../components/box/Section";
import SectionHeader from "../components/header/SectionHeader";
import StuffList from "../components/list/StuffList";
import SectionBodyWrapper from "../components/wrapper/SectionBodyWrapper";
import { useOpen } from "../hooks/useOpen";

function MyStuffList() {
    const { open } = useOpen();

    return (
        <Section>
            <MotionDiv open={open} style={{ paddingTop: "5rem" }} fullWidth>
                <SectionBodyWrapper>
                    <SectionHeader title="My Stuff" />
                    <StuffList />
                </SectionBodyWrapper>
            </MotionDiv>
        </Section>
    );
}

export default MyStuffList;
