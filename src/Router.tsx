import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

import AppWrapper from "./AppWrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MyStuff from "./pages/MyStuff";
import MyStuffList from "./pages/MyStuffList";

const AppRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AppWrapper />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/my-stuff" element={<MyStuffList />} />
                    <Route path="/my-stuff/:stuffSlug" element={<MyStuff />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRouter;
