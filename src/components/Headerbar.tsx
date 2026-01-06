import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Headerbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div id="header-bar" className={(theme === "Dark") ? 'dark-mode' : undefined}>
            <h1>Where in the World?</h1>
            <p onClick={toggleTheme}>{theme === "Dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}</p>
        </div>
    )
}