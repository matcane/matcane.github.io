import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useState } from "react";

const links = {
    linkedin: "https://www.linkedin.com/in/mateusz-laskowski-16321b310/",
    email: "mat.laskowski.kontakt@gmail.com",
    github: "https://github.com/matcane",
};

export default function ContactInfo({ label }: { label: string }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(links[label as keyof typeof links]);
        setOpen(true);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div>
            <Button color="success" variant="text" onClick={handleClick}>
                {label}
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "20rem" }}
                >
                    {label.toUpperCase()} Copied to clipboard!
                </Alert>
            </Snackbar>
        </div>
    );
}
