import { SxProps } from "@mui/material";
import { motion, MotionStyle } from "framer-motion";
import { PropsWithChildren } from "react";

type FadeAnimationProps = PropsWithChildren & {
    styles?: SxProps;
    delay?: number;
};

export default function FadeAnimation({
    styles,
    delay,
    children,
}: FadeAnimationProps) {
    return (
        <motion.div
            className="box"
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.5,
            }}
            transition={{
                duration: 0.25,
                delay: delay,
                ease: [0, 0.3, 0.6, 1.01],
            }}
            style={styles as MotionStyle}
        >
            {children}
        </motion.div>
    );
}
