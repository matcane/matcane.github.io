import { SxProps } from "@mui/material";
import { motion, MotionStyle } from "framer-motion";
import { PropsWithChildren } from "react";

type FadeAnimationProps = PropsWithChildren & {
    styles?: SxProps;
    delay?: number;
    direction: "left" | "right" | "top" | "bottom";
};

export default function SlideAnimation({
    styles,
    delay,
    direction,
    children,
}: FadeAnimationProps) {
    const yValue = direction === "top" ? -200 : 200;
    const xValue = direction === "left" ? -200 : 200;
    return (
        <motion.div
            className="box"
            initial={{
                opacity: 0,
                y: ["top", "bottom"].includes(direction) ? yValue : 0,
                x: ["left", "right"].includes(direction) ? xValue : 0,
            }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
            }}
            exit={{
                y: ["top", "bottom"].includes(direction) ? yValue : 0,
                x: ["left", "right"].includes(direction) ? xValue : 0,
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0, 0.3, 0.6, 1.01],
            }}
            style={styles as MotionStyle}
        >
            {children}
        </motion.div>
    );
}
