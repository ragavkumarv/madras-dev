"use client";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Navigation";

// TODO: Right types
export function PrimaryButton({ children, sx = {}, ...props }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          fontWeight: 700,
          fontFamily: "var(--ff-sans-serif)",
          color: "color: var(--primary-clr)",
          ...sx,
        }}
        variant="contained"
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
