"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    // {/* Add your themes here */}
    <NextThemesProvider themes={["light", "dark"]} {...props}>
      {" "}
      {children}
    </NextThemesProvider>
  );
}
