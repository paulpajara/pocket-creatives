import React from "react";
import { cn } from "../utils/cn";

const videoExtensions = [".mp4", ".webm", ".mov", ".m4v"];

export function isVideoAsset(src = "") {
  const cleanSrc = src.split("?")[0].toLowerCase();
  return videoExtensions.some((extension) => cleanSrc.endsWith(extension));
}

export function MediaAsset({ src, alt = "", className, imageClassName, videoClassName, autoPlay = true }) {
  if (isVideoAsset(src)) {
    return (
      <video
        className={cn("h-full w-full object-cover", className, videoClassName)}
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={src} />
      </video>
    );
  }

  return <img src={src} alt={alt} className={cn("h-full w-full object-cover", className, imageClassName)} />;
}
