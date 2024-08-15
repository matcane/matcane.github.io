import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import MotionContact from "../components/animation/MotionContact";
import MotionDiv from "../components/animation/MotionDiv";
import Section from "../components/box/Section";
import SectionHeader from "../components/header/SectionHeader";
import SectionBodyWrapper from "../components/wrapper/SectionBodyWrapper";
import SectionContactBodyWrapper from "../components/wrapper/SectionContactBodyWrapper";
import { useOpen } from "../hooks/useOpen";

function Contact() {
    const { open } = useOpen();
    return (
        <Section>
            <MotionDiv open={open} style={{ paddingTop: "5rem" }} fullWidth>
                <SectionBodyWrapper>
                    <SectionHeader title="Contact" />
                    <SectionContactBodyWrapper>
                        <MotionDiv open={open} duration={1.1}>
                            <MotionContact title="Linkedin">
                                <LinkedInIcon
                                    color="primary"
                                    sx={{ fontSize: 90 }}
                                />
                            </MotionContact>
                        </MotionDiv>
                        <MotionDiv open={open} duration={1.1}>
                            <MotionContact title="Gmail">
                                <EmailIcon
                                    color="primary"
                                    sx={{ fontSize: 90 }}
                                />
                            </MotionContact>
                        </MotionDiv>
                        <MotionDiv open={open} duration={1.1}>
                            <MotionContact title="Github">
                                <GitHubIcon
                                    color="primary"
                                    sx={{ fontSize: 90 }}
                                />
                            </MotionContact>
                        </MotionDiv>
                    </SectionContactBodyWrapper>
                </SectionBodyWrapper>
            </MotionDiv>
        </Section>
    );
}

export default Contact;
