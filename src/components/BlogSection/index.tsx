"use client";

import { useThemeColors } from "@/context/ThemeProvider";
import BlogContent from "./BlogContent";

const BlogSection = () => {
  const colors = useThemeColors();

  return (
    <div style={{
      backgroundColor: colors.backgroundColor,
      color: colors.textColor,
      minHeight: "100vh"
    }}>
        <BlogContent />
    </div>
  )
}

export default BlogSection; 