import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = ({
    open,
    handleToggle,
}: {
    open: boolean;
    handleToggle: () => void;
}) => {
    return (
        <>
            <Button
                onClick={handleToggle}
                sx={{
                    position: "absolute",
                    backgroundColor: "#0b0c10",
                    top: 0,
                    right: 0,
                    marginTop: "2rem",
                    marginRight: "2rem",
                    zIndex: 50,
                }}
            >
                {open ? (
                    <ArrowDropUpIcon color="primary" sx={{ fontSize: 45 }} />
                ) : (
                    <ArrowDropDownIcon color="primary" sx={{ fontSize: 45 }} />
                )}
            </Button>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingX: "2rem",
                    boxSizing: "border-box",
                    justifyContent: "center",
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        visibility: "hidden",
                        position: "absolute",
                        y: open ? -200 : 0,
                    }}
                    animate={{
                        opacity: open ? 1 : 0,
                        visibility: open ? "visible" : "hidden",
                        position: open ? "static" : "absolute",
                        y: open ? 100 : 0,
                        transition: {
                            duration: 0.1,
                            delay: open ? 0.5 : 0,
                            ease: [0, 0.3, 0.6, 1.01],
                        },
                    }}
                    exit={{
                        y: -200,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: [0, 0.3, 0.6, 1.01],
                        },
                    }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <motion.div whileHover={{ scale: 1.2, x: 200 }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography color="primary" fontSize={64}>
                                Home
                            </Typography>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, x: 200 }}>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <Typography color="primary" fontSize={64}>
                                About Me
                            </Typography>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, x: 200 }}>
                        <Link to="/my-stuff" style={{ textDecoration: "none" }}>
                            <Typography color="primary" fontSize={64}>
                                My Stuff
                            </Typography>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, x: 200 }}>
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            <Typography color="primary" fontSize={64}>
                                Contact
                            </Typography>
                        </Link>
                    </motion.div>
                </motion.div>
            </Box>
        </>
    );
};

export default Menu;
