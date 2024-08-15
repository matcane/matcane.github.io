import CodeIcon from "@mui/icons-material/Code";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import FlexBox from "../box/FlexBox";
import StuffTypography from "../typography/StuffTypography";

const SectionStuffHeader = ({
    data,
}: {
    data: {
        title: string;
        img: string;
        stack: string[];
        description: string;
        demo: string | null;
        repo: string;
    };
}) => {
    return (
        <>
            <FlexBox fullWidth>
                <StuffTypography title={data.title} />
                <FlexBox sx={{ gap: "2rem" }}>
                    <Link to={data.repo} target="_blank">
                        <CodeIcon
                            color="success"
                            sx={{
                                fontSize: {
                                    xs: 22,
                                    lg: 44,
                                },
                            }}
                        />
                    </Link>
                    {data.demo && (
                        <Link to={data.demo} target="_blank">
                            <Typography
                                color="secondary"
                                sx={{
                                    fontSize: {
                                        xs: 22,
                                        lg: 44,
                                    },
                                }}
                            >
                                Demo
                            </Typography>
                        </Link>
                    )}
                </FlexBox>
            </FlexBox>

            <Divider
                sx={{
                    width: "100%",
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                    borderWidth: "medium",
                    borderColor: "orange",
                }}
            />
        </>
    );
};

export default SectionStuffHeader;
