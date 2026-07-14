import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "../utils/cn";

export function StickerButton({
  label = "Let's Talk",
  onClick,
  className,
  icon = false,
  variant = "blue"
}) {
  const colors =
    variant === "yellow"
      ? "bg-pocket-yellow text-pocket-ink"
      : "bg-pocket-blue text-white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group inline-flex h-20 w-20 shrink-0 rotate-[9deg] flex-col items-center justify-center rounded-full text-center text-lg font-extrabold leading-none shadow-button transition hover:rotate-0 hover:scale-105",
        colors,
        className
      )}
      aria-label={label}
    >
      {icon ? <MessageCircle className="h-8 w-8" aria-hidden="true" /> : label.split(" ").map((word) => (
        <span key={word} className="block">
          {word}
        </span>
      ))}
    </button>
  );
}
