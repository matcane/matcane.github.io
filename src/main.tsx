import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import AppRouter from "./Router.tsx";

import "./index.css";
import "@fontsource-variable/edu-au-vic-wa-nt-hand";

const theme = createTheme({
    typography: {
        fontFamily: ['"Edu AU VIC WA NT Hand Variable", cursive'].join(","),
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <AppRouter />
            </HashRouter>
        </ThemeProvider>
    </StrictMode>
);
