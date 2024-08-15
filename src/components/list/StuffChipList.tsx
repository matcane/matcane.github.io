import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";

import FlexBox from "../box/FlexBox";

const StuffChipList = ({ stack }: { stack: string[] }) => {
    return (
        <FlexBox
            sx={{
                width: "100%",
                marginBottom: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
            }}
        >
            {stack.map((tech, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2 }}>
                    <Chip
                        label={tech}
                        color="primary"
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1.4rem",
                            },
                            height: "40px",
                        }}
                    />
                </motion.div>
            ))}
        </FlexBox>
    );
};

export default StuffChipList;
