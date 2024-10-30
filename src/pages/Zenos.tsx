import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import phone_small from "/phone_small.webp";
import phone_medium from "/phone_medium.webp";
import bg_small from "/bg_small.webp";
import bg_medium from "/bg_medium.webp";

import FadeAnimation from "../animations/FadeAnimation";
import Drawer, { ZenosLink } from "../components/Drawer";
import { leftIconLinks, rightIconLinks } from "../constants";
import { styles } from "../styles";

export default function Zenos() {
    const navigate = useNavigate();
    return (
        <Box component="section" sx={styles.section}>
            <Button
                sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    textDecoration: "none",
                }}
                onClick={() => navigate("/")}
            >
                <ArrowBackIcon sx={{ fontSize: 36 }} />
            </Button>
            <picture style={{ position: "absolute", zIndex: 999 }}>
                <source
                    draggable={false}
                    media="(min-width:1200px)"
                    srcSet={phone_medium}
                />
                <img draggable={false} src={phone_small} />
            </picture>

            <FadeAnimation styles={styles.section}>
                <picture style={{ position: "absolute" }}>
                    <source
                        draggable={false}
                        media="(min-width:1200px)"
                        width={328}
                        height={760}
                        srcSet={bg_medium}
                    />
                    <img
                        draggable={false}
                        src={bg_small}
                        width={252}
                        height={582}
                        style={{ borderRadius: "1.5rem" }}
                    />
                </picture>
                <Outlet />
            </FadeAnimation>
            <Box sx={styles.zenosMainLinksWrapper}>
                <Box
                    sx={{
                        ...styles.zenosSecondaryLinksWrapper,
                        alignItems: "flex-start",
                    }}
                >
                    {leftIconLinks.map(({ to, label, icon }) => (
                        <ZenosLink key={to} to={to} label={label} icon={icon} />
                    ))}
                </Box>

                <Box
                    sx={{
                        ...styles.zenosSecondaryLinksWrapper,
                        alignItems: "flex-end",
                    }}
                >
                    {rightIconLinks.map(({ to, label, icon }) => (
                        <ZenosLink
                            key={to}
                            to={to}
                            label={label}
                            icon={icon}
                            isRight
                        />
                    ))}
                </Box>
            </Box>
            <Drawer />
        </Box>
    );
}
