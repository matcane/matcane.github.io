import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import AppRouter from "./Router";

import "./index.css";
import "@fontsource-variable/montserrat";

const theme = createTheme({
    typography: {
        fontFamily: ["Montserrat Variable"].join(","),
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
