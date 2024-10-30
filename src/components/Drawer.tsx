import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

import { leftIconLinks, rightIconLinks } from "../constants";
import { styles } from "../styles";

type ZenosLinkProps = {
    to: string;
    label?: string;
    icon: string;
    isRight?: boolean;
    isSmall?: boolean;
};

export const ZenosLink = ({
    to,
    label,
    icon,
    isRight,
    isSmall,
}: ZenosLinkProps) => (
    <NavLink to={to} style={styles.zenosLink as React.CSSProperties}>
        {({ isActive }) => (
            <Box
                sx={{
                    ...styles.zenosLink,
                    backgroundColor: isActive ? "#555" : undefined,
                    flexDirection: isRight ? "row-reverse" : "row",
                    height: isSmall ? 128 : "auto",
                    justifyContent: isSmall ? "center" : undefined,
                }}
            >
                <img
                    draggable={false}
                    src={icon}
                    width={isSmall ? 64 : undefined}
                    height={isSmall ? 64 : undefined}
                />
                {label && (
                    <Typography color="white" fontSize={32}>
                        {label}
                    </Typography>
                )}
            </Box>
        )}
    </NavLink>
);

export default function BottomDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setOpen(open);
        };

    const list = () => (
        <Box
            sx={{
                width: "auto",
                backgroundColor: "#0b0c10",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                <Typography>Back</Typography>
            </List>
            <List sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                {leftIconLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                        <ZenosLink to={link.to} icon={link.icon} isSmall />
                    </ListItem>
                ))}
            </List>
            <List sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                {rightIconLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                        <ZenosLink to={link.to} icon={link.icon} isSmall />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                display: {
                    xs: "flex",
                    md: "none",
                },
                position: "absolute",
                bottom: 5,
                right: 0,
            }}
        >
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ fontSize: 36 }} />
            </Button>
            <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </Box>
    );
}
