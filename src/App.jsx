import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./themes/light";
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Profile from "./components/logged-user/Profile"; // Nezabudol si pridať Profile
import { Schedule } from "@mui/icons-material";
import Courses from "./pages/Schedule";

const App = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                {/* Navigácia je tu zahrnutá mimo Routes */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} /> {/* Pridaj profilovú stránku */}
                    <Route path="/schedule" element={<Courses />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;