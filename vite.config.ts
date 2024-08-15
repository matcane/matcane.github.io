import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: [
            "react",
            "react-dom",
            "@emotion/react",
            "@emotion/styled",
            "@mui/material",
            "react-router-dom",
            "react-router",
            "@remix-run/router",
        ],
    },
    build: {
        target: "esnext",
        chunkSizeWarningLimit: 300,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react"],
                    react_dom: ["react-dom"],
                    react_router: ["react-router", "@remix-run/router"],
                    framer: ["framer-motion"],
                    mui: ["@mui/material"],
                },
            },
        },
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
