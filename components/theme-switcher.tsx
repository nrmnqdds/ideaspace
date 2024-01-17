"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const ThemeSwitcher = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const { theme, setTheme } = useTheme();

    return (
      <button
        name="theme-switcher"
        type="button"
        className={cn(
          "w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold focus:outline-none",
          className,
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        {...props}
        ref={ref}
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </button>
    );
  },
);
