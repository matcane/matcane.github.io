import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PreviewIcon from "@mui/icons-material/Preview";
import { Avatar, Box, Button, Typography } from "@mui/material";

import hero from "/avatar.webp";
import zenos from "/zenos-icon.png";
import zenos_small from "/zenos-icon_small.png";
import zenos_xsmall from "/zenos-icon_xsmall.png";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import FadeAnimation from "../animations/FadeAnimation";
import SlideAnimation from "../animations/SlideAnimation";
import ContactInfo from "../components/ContactInfo";
import { styles } from "../styles";

const links = {
    linkedin: "https://www.linkedin.com/in/mateusz-laskowski-16321b310/",
    email: "mailto:mat.laskowski.kontakt@gmail.com",
    github: "https://github.com/matcane",
};

const HeroTypography = ({
    mode,
    text,
}: {
    mode: "primary" | "secondary";
    text: string;
}) => {
    const fonts =
        mode === "primary"
            ? {
                  xs: 32,
                  sm: 48,
                  md: 64,
                  lg: 72,
                  xl: 96,
              }
            : {
                  xs: 24,
                  sm: 36,
                  md: 48,
                  lg: 54,
                  xl: 72,
              };
    return (
        <Typography
            sx={{
                fontSize: fonts,
            }}
            color="white"
        >
            {text}
        </Typography>
    );
};

const ContactLink = ({ label }: { label: "linkedin" | "github" | "email" }) => (
    <Box
        sx={{
            ...styles.flexFullCenter,
            cursor: "pointer",
            flexDirection: {
                xs: "row",
                sm: "column",
            },
            gap: "2rem",
        }}
    >
        <Link
            aria-label={"Link to " + label}
            to={links[label as keyof typeof links]}
            target="_blank"
            style={{ textDecoration: "none" }}
        >
            <motion.div whileHover={{ scale: 1.2 }}>
                {label === "linkedin" && (
                    <FadeAnimation delay={0.6}>
                        <LinkedInIcon color="primary" sx={{ fontSize: 90 }} />
                    </FadeAnimation>
                )}

                {label === "github" && (
                    <FadeAnimation delay={0.8}>
                        <GitHubIcon color="primary" sx={{ fontSize: 90 }} />
                    </FadeAnimation>
                )}

                {label === "email" && (
                    <FadeAnimation delay={1}>
                        <EmailIcon color="primary" sx={{ fontSize: 90 }} />
                    </FadeAnimation>
                )}
            </motion.div>
        </Link>
        <ContactInfo label={label} />
    </Box>
);

export default function Home() {
    const navigate = useNavigate();
    return (
        <Box>
            <Box component="section" sx={styles.section}>
                <Box
                    sx={{
                        ...styles.flexFullCenter,
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                    }}
                >
                    <SlideAnimation direction="left">
                        <Avatar
                            sx={{ userSelect: "none", width: 174, height: 174 }}
                            src={hero}
                            alt="avatar-img"
                        />
                    </SlideAnimation>
                    <SlideAnimation direction="right" delay={0.2}>
                        <Box
                            sx={{
                                ...styles.flexFullCenter,
                                flexDirection: "column",
                            }}
                        >
                            <HeroTypography mode="primary" text="React Dev" />
                            <HeroTypography
                                mode="secondary"
                                text="Mateusz Laskowski"
                            />
                        </Box>
                    </SlideAnimation>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "2rem",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                    }}
                >
                    <ContactLink label="linkedin" />
                    <ContactLink label="github" />
                    <ContactLink label="email" />
                </Box>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDownwardIcon color="primary" sx={{ fontSize: 48 }} />
                </motion.div>
            </Box>
            <Box
                component="section"
                sx={{
                    ...styles.section,
                    userSelect: "auto",
                    paddingX: {
                        xs: "0.75rem",
                        sm: "1rem",
                        lg: "1.5rem",
                        xl: "8rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        paddingTop: "0rem",
                        fontSize: {
                            xs: "2rem",
                            sm: "3rem",
                            lg: "4rem",
                            xl: "5rem",
                        },
                    }}
                    color={"white"}
                >
                    About Me
                </Typography>
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: {
                            xs: "1.25rem",
                            sm: "1.75rem",
                            lg: "2.25rem",
                            xl: "2.5rem",
                        },
                    }}
                    color={"white"}
                >
                    Jestem początkującym programistą mobilnym, który świetnie
                    odnajduje się w pracy z{" "}
                    <Box component="span" sx={{ color: "#61dafb" }}>
                        React Native
                    </Box>{" "}
                    (
                    <Box component="span" sx={{ color: "#4630EB" }}>
                        Expo
                    </Box>
                    ),{" "}
                    <Box component="span" sx={{ color: "#FFCA28" }}>
                        Firebase
                    </Box>{" "}
                    i{" "}
                    <Box component="span" sx={{ color: "#E57373" }}>
                        Zustand
                    </Box>
                    . Mam także podstawy w{" "}
                    <Box component="span" sx={{ color: "#61dafb" }}>
                        React
                    </Box>{" "}
                    z{" "}
                    <Box component="span" sx={{ color: "#42b883" }}>
                        Vite
                    </Box>
                    ,{" "}
                    <Box component="span" sx={{ color: "#90caf9" }}>
                        react-router-dom
                    </Box>{" "}
                    oraz{" "}
                    <Box component="span" sx={{ color: "#007FFF" }}>
                        Material UI
                    </Box>
                    . W swoich projektach eksperymentowałem również z takimi
                    technologiami jak{" "}
                    <Box component="span" sx={{ color: "#306998" }}>
                        Python
                    </Box>
                    ,{" "}
                    <Box component="span" sx={{ color: "#092E20" }}>
                        Django
                    </Box>{" "}
                    i{" "}
                    <Box component="span" sx={{ color: "#F4B400" }}>
                        JWT
                    </Box>
                    , co pozwoliło mi poszerzyć horyzonty i poznać różne
                    podejścia do tworzenia aplikacji. Najwięcej radości sprawia
                    mi budowanie aplikacji mobilnych i dążę do tego, by w
                    przyszłości rozwijać się w tym obszarze profesjonalnie.
                </Typography>
            </Box>
            <FadeAnimation>
                <Box
                    component="section"
                    sx={{
                        height: "100dvh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            alignContent: "center",
                            justifyContent: "center",
                            paddingTop: {
                                xs: "4rem",
                                md: "0rem",
                            },
                            flexDirection: {
                                xs: "column",
                                md: "row",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                marginLeft: {
                                    xs: "0rem",
                                    md: "2rem",
                                },
                            }}
                        >
                            <picture>
                                <source
                                    draggable={false}
                                    media="(min-width:1100px)"
                                    srcSet={zenos}
                                />
                                <source
                                    draggable={false}
                                    media="(min-width:950px)"
                                    srcSet={zenos_small}
                                />

                                <img src={zenos_xsmall} />
                            </picture>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                gap: {
                                    xs: "2rem",
                                    sm: "3rem",
                                    lg: "4rem",
                                    xl: "5rem",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                    paddingTop: "0rem",
                                    fontSize: {
                                        xs: "2rem",
                                        sm: "3rem",
                                        lg: "4rem",
                                        xl: "5rem",
                                    },
                                }}
                                color={"white"}
                            >
                                Zen
                                <Box component="span" sx={{ color: "#efbf04" }}>
                                    OS
                                </Box>
                            </Typography>
                            <Typography
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                    fontSize: {
                                        xs: "0.75rem",
                                        sm: "1.75rem",
                                        lg: "2.25rem",
                                        xl: "2.5rem",
                                    },
                                }}
                                color={"white"}
                            >
                                Aplikacja w{" "}
                                <Box component="span" sx={{ color: "#61dafb" }}>
                                    React Native
                                </Box>{" "}
                                z{" "}
                                <Box component="span" sx={{ color: "#4630EB" }}>
                                    Expo
                                </Box>
                                , który imituje system operacyjny telefonu.
                                Aplikacja zawiera kilka funkcjonalnych narzędzi,
                                takich jak kalkulator, zegar, aparat, aplikacja
                                do pogody oraz komunikator tekstowy. Jest to mój
                                osobisty sandbox, w którym testuję nowe pomysły
                                i rozwijam umiejętności, stopniowo dodając nowe
                                aplikacje.
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                    },
                                }}
                            >
                                <Button
                                    onClick={() => navigate("/zenos/")}
                                    color="warning"
                                    variant="outlined"
                                    startIcon={<PreviewIcon />}
                                >
                                    Web Preview
                                </Button>

                                <Button
                                    href="https://github.com/matcane/ZenOS"
                                    target="_blank"
                                    color="primary"
                                    variant="outlined"
                                    startIcon={<GitHubIcon />}
                                >
                                    Source Code
                                </Button>
                                <Button
                                    href="https://github.com/matcane/ZenOS/releases/tag/v0.0.1"
                                    target="_blank"
                                    color="success"
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                >
                                    Download APK
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </FadeAnimation>
            {/* <Box
                component="section"
                sx={{
                    ...styles.section,
                    height: "10rem",
                    marginBottom: "1rem",
                    paddingX: {
                        xs: "0.75rem",
                        sm: "1rem",
                        lg: "1.5rem",
                        xl: "8rem",
                    },
                }}
            >
                <Typography color="white" sx={{ fontSize: 72 }}>
                    Reszta moich repozytori
                </Typography>
            </Box> */}
        </Box>
    );
}
