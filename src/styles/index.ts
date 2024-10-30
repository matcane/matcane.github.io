export const styles = {
    section: {
        userSelect: "none",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    },
    flexFullCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    zenosLink: {
        textDecoration: "none",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ":hover": {
            backgroundColor: "#000",
            cursor: "pointer",
        },
    },
    zenosMainLinksWrapper: {
        display: {
            xs: "none",
            md: "flex",
        },
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%",
        justifyContent: "space-between",
    },
    zenosSecondaryLinksWrapper: {
        width: {
            xs: "calc(50% - 140px)",
            lg: "calc(50% - 180px)",
        },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
};
