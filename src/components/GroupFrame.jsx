import React from "react";
import { Box, Typography } from "@mui/material";

export default function GroupFrame({
  title,
  children,
  height = "100%",
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        width: "100%",
        border: "2px solid #444",
        borderRadius: "24px",
        backgroundColor: "#f5f5f5",
        p: 3,
        pt: 5,
        boxSizing: "border-box",
      }}
    >
      {/* TITLE */}
      <Box
        sx={{
          position: "absolute",
          top: -12,
          left: 70,
          px: 2,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontFamily: "cursive",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* INNER CONTENT AREA */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          border: "2px solid #777",
          p: 2,
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}