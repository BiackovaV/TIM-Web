import React from "react";

const ToggleThemeButton = ({ theme, toggleTheme }) => (
    <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
);

export default ToggleThemeButton;
