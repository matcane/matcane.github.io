import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

import Calc from "./pages/Calc";
import Camera from "./pages/Camera";
import Clock from "./pages/Clock";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Weather from "./pages/Weather";
import Zenos from "./pages/Zenos";

const AppRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/zenos" element={<Zenos />}>
                    <Route path="/zenos/clock" element={<Clock />} />
                    <Route path="/zenos/calc" element={<Calc />} />
                    <Route path="/zenos/settings" element={<Settings />} />
                    <Route path="/zenos/weather" element={<Weather />} />
                    <Route path="/zenos/messages" element={<Messages />} />
                    <Route path="/zenos/camera" element={<Camera />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRouter;
