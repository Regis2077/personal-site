"use client";

import MainContent from "./MainContent";
import { useThemeColors } from "@/context/ThemeProvider";

const Cards = () => {
  const colors = useThemeColors();

  return (
    <div style={{
      backgroundColor: colors.backgroundColor,
      color: colors.textColor,
      minHeight: "100vh"
    }}>
      <MainContent />
    </div>
  )
}

export default Cards;