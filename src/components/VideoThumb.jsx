import React from "react";
import { Play } from "lucide-react";
import { MediaAsset } from "./MediaAsset";
import { cn } from "../utils/cn";

export function VideoThumb({ src, alt, label, className, onClick, showPlay = true }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl bg-pocket-ink text-left shadow-soft",
        className
      )}
      aria-label={label}
    >
      <MediaAsset
        src={src}
        alt={alt}
        className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      {showPlay ? (
        <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-pocket-ink shadow-soft transition group-hover:bg-pocket-yellow">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </span>
      ) : null}
    </button>
  );
}
