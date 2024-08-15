import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Menu from "./components/menu/Menu";

const AppWrapper = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Menu open={open} handleToggle={handleToggle} />
            <motion.div
                animate={{
                    display: open ? "none" : "block",
                    opacity: open ? 0 : 1,
                }}
            >
                <Outlet context={{ open } satisfies { open: boolean }} />
            </motion.div>
        </>
    );
};

export default AppWrapper;
