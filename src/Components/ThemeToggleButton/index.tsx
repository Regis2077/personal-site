"use client";

import { useTheme, useThemeColors } from "@/app/context/themeProvider";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const colors = useThemeColors();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "12px",
        border: `2px solid ${colors.borderColor}`,
        backgroundColor: colors.backgroundColor,
        color: colors.textColor,
        cursor: "pointer",
        fontSize: "18px",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "44px",
        minHeight: "44px",
        boxShadow: theme === "dark" 
          ? "0 2px 8px rgba(0, 0, 0, 0.3)" 
          : "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.backgroundColor = colors.primaryColor;
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = colors.backgroundColor;
        e.currentTarget.style.color = colors.textColor;
      }}
      title={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}
