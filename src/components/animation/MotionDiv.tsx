import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type MotionDivProps = PropsWithChildren<{
    x?: number;
    y?: number;
    open: boolean;
    duration?: number;
    fullWidth?: boolean;
    scroll?: boolean;
    tabletPadding?: boolean;
    style?: object;
}>;

const MotionDiv = ({
    x = 0,
    y = 100,
    open,
    duration = 0.3,
    fullWidth,
    scroll,
    style,
    children,
}: MotionDivProps) => {
    return (
        <motion.div
            className="box"
            initial={{
                opacity: open ? 1 : 0,
                scale: 0.5,
                x: x,
                y: open ? 0 : y,
            }}
            animate={{
                opacity: open ? 0 : 1,
                scale: 1,
                x: 0,
                y: open ? -200 : 0,
            }}
            exit={{
                y: -200,
                opacity: 0,
                transition: { duration: 1, ease: [0, 0.3, 0.6, 1.01] },
            }}
            transition={{
                duration: duration,
                delay: open ? 0 : 0.1,
                ease: [0, 0, 0.2, 1.01],
            }}
            style={{
                height: "100%",
                overflow: scroll ? "auto" : "none",
                width: fullWidth ? "100%" : "auto",
                ...style,
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionDiv;
