import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import stuffData from "../../data/stuffData";

const StuffList = () => {
    const StuffKeys = Object.keys(stuffData);
    const StuffValues = Object.values(stuffData);
    return (
        <List
            sx={{
                width: "100%",
                color: "lightblue",
            }}
            aria-label="contacts"
        >
            {StuffValues.map((stuff, index) => (
                <motion.div whileHover={{ x: 50 }}>
                    <ListItem key={index} disablePadding>
                        <Link
                            to={StuffKeys[index]}
                            style={{
                                display: "flex",
                                width: "100%",
                                color: "lightblue",
                                textDecoration: "none",
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    height: "4rem",
                                }}
                            >
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "2rem",
                                        },
                                    }}
                                    primary={stuff.title}
                                />
                            </ListItemButton>
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.2 }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    repeatDelay: 0.2,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    color="error"
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "2rem",
                                        },
                                    }}
                                >
                                    {stuff.devStatus}
                                </Typography>
                            </motion.div>
                        </Link>
                    </ListItem>
                </motion.div>
            ))}
        </List>
    );
};

export default StuffList;
