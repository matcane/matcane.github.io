import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import MotionDiv from "../components/animation/MotionDiv";
import FlexBox from "../components/box/FlexBox";
import Section from "../components/box/Section";
import HeroTypography from "../components/typography/HeroTypography";
import { useOpen } from "../hooks/useOpen";

function Home() {
    const { open } = useOpen();
    return (
        <Section>
            <Link to="/contact" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.5 }}>
                    <FlexBox>
                        <Box component="div" justifyContent="end">
                            <MotionDiv y={100} open={open} duration={0.3}>
                                <HeroTypography
                                    size="lg"
                                    text="👋 Hi  there!"
                                ></HeroTypography>
                                <HeroTypography
                                    size="lg"
                                    text="I'm Mateusz Laskowski"
                                ></HeroTypography>
                            </MotionDiv>
                            <MotionDiv y={100} open={open} duration={0.4}>
                                <HeroTypography
                                    size="sm"
                                    align="right"
                                    text="Frontend Dev?"
                                ></HeroTypography>
                            </MotionDiv>
                        </Box>
                    </FlexBox>
                </motion.div>
            </Link>
            <FlexBox sx={{ flexDirection: "row", gap: "2rem" }}>
                <MotionDiv open={open} duration={0.5}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link
                            to="/about"
                            style={{ textDecorationColor: "orange" }}
                        >
                            <Typography fontSize={28} color="white">
                                About Me
                            </Typography>
                        </Link>
                    </motion.div>
                </MotionDiv>
                <MotionDiv open={open} duration={0.5}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link
                            to="/my-stuff"
                            style={{ textDecorationColor: "orange" }}
                        >
                            <Typography fontSize={28} color="white">
                                Stuff I've Made
                            </Typography>
                        </Link>
                    </motion.div>
                </MotionDiv>
            </FlexBox>
        </Section>
    );
}

export default Home;
