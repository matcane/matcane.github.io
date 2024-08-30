import { Typography } from "@mui/material";

import MotionAvatar from "../components/animation/MotionAvatar";
import MotionDiv from "../components/animation/MotionDiv";
import Section from "../components/box/Section";
import SectionHeader from "../components/header/SectionHeader";
import SectionBodyWrapper from "../components/wrapper/SectionBodyWrapper";
import { useOpen } from "../hooks/useOpen";

function About() {
    const { open } = useOpen();
    return (
        <Section>
            <MotionDiv open={open} style={{ paddingTop: "5rem" }} fullWidth>
                <SectionBodyWrapper>
                    <SectionHeader title="About Me" />
                    <Typography color="primary" fontSize={22}>
                        Hey, my name is Mateusz Laskowski, and I have a degree
                        in computer science. I want to grow as a front-end
                        developer, focusing on creating attractive and
                        functional user interfaces. I am ready to gain practical
                        experience and develop my skills in HTML, CSS,
                        JavaScript, React and React Native.
                    </Typography>
                </SectionBodyWrapper>
            </MotionDiv>
            <MotionAvatar open={open} />
        </Section>
    );
}

export default About;
