import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const links = {
    Linkedin: "https://www.linkedin.com/in/mateusz-laskowski-16321b310/",
    Gmail: "mailto:mat.laskowski.kontakt@gmail.com",
    Github: "https://github.com/matcane",
};

const MotionContact = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <Link
            to={links[title as keyof typeof links]}
            target="_blank"
            style={{ textDecoration: "none" }}
        >
            <motion.div
                whileHover={{ scale: 1.2 }}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                {children}

                <Typography color="white">{title}</Typography>
            </motion.div>
        </Link>
    );
};

export default MotionContact;
