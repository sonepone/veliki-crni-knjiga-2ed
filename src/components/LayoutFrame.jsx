import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * Usage:
 *
 * <LayoutFrame title="My Title">
 *    <MyRealComponent />
 * </LayoutFrame>
 */

export default function LayoutFrame({
  title,
  children,
  sx = {},
}) {
  return (
    <Box
      sx={{
        position: "relative",
        border: "2px gray solid", // DEBUG
        borderStyle: "outset", // groove ridge inset outset double
        backgroundColor: "#f5f5f5",

        /*
         * THIS is your invisible outer layout component.
         * It has NO border.
         */
        width: "100%",
        height: "100%",

        /*
         * Space between outer layout edge and inner frame
         * Corresponds to your sketch.
         */
        paddingTop: "12px",
        paddingLeft: "6px",
        paddingRight: "6px",
        paddingBottom: "6px",

        boxSizing: "border-box",

        ...sx,
      }}
    >
      {/* INNER VISIBLE FRAME */}
      <Box
        sx={{
          position: "relative",

          width: "100%",
          height: "100%",

        //   border: "2px solid #666",
          backgroundColor: "#f5f5f5",

 borderWidth: "1px",
  borderStyle: "groove",
  borderColor: "#666",          

          /*
           * Important:
           * Padding top gives space below title.
           */
          padding: 2,
          paddingTop: 4,

          boxSizing: "border-box",


        //   overflow: "hidden",
                  overflow: "visible",
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            position: "absolute",

            /*
             * Moves title into top border line.
             */
            // top: "-14px",
                top: "-8px",
            left: "12px",

            px: 1.5,

            /*
             * MUST match background
             * so it visually cuts border line.
             */
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* PLACE FOR REAL COMPONENT */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}