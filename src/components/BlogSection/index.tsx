"use client";

import { Container } from "@mui/material";
import { useThemeColors } from "@/app/context/themeProvider";
import BlogContent from "./BlogContent";

const BlogSection = () => {
  const colors = useThemeColors();

  return (
    <div style={{ 
      backgroundColor: colors.backgroundColor,
      color: colors.textColor,
      minHeight: "100vh"
    }}>
      <Container
        maxWidth="lg"
        component="main"
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          my: 16, 
          gap: 4,
          backgroundColor: colors.backgroundColor,
          color: colors.textColor
        }}
      >
        <BlogContent />
      </Container>
    </div>
  )
}

export default BlogSection; 