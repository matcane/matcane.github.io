import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <>
            <Typography color="primary" fontSize={44} width="100%">
                {title}
            </Typography>
            <Divider
                sx={{
                    width: "100%",
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    borderWidth: "medium",
                    borderColor: "orange",
                }}
            />
        </>
    );
};

export default SectionHeader;
