import React from "react";
import { cn } from "../utils/cn";

const variants = {
  yellow: "bg-pocket-yellow text-pocket-ink hover:bg-pocket-ink hover:text-white",
  blue: "bg-pocket-cyan text-pocket-ink hover:bg-pocket-ink hover:text-white",
  dark: "bg-pocket-ink text-white hover:bg-pocket-blue",
  ghost: "bg-transparent text-pocket-ink hover:bg-pocket-yellow",
  white: "bg-white text-pocket-ink hover:bg-pocket-yellow"
};

export function PillButton({
  as: Component = "button",
  variant = "yellow",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex min-h-9 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
        "disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
