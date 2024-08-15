import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";

import hero from "/avatar.webp";

const MotionAvatar = ({ open }: { open: boolean }) => {
    return (
        <motion.div
            initial={{
                y: open ? 0 : 100,
            }}
            animate={{
                y: open ? 100 : 0,
                transition: {
                    duration: open ? 0.5 : 1.5,
                    ease: [0, 0, 0.2, 1.01],
                },
            }}
            whileHover={{ y: -74 }}
            whileTap={{ y: -74 }}
            style={{
                position: "absolute",
                bottom: -74,
                right: 0,
            }}
        >
            <Avatar
                sx={{
                    userSelect: "none",
                    width: 174,
                    height: 174,
                }}
                src={hero}
            />
        </motion.div>
    );
};

export default MotionAvatar;
