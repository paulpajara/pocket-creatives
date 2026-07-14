import React, { useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { isVideoAsset } from "../MediaAsset";

export function SoundToggleVideo({ src, poster, alt, className, mediaClassName }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video || !isVideoAsset(src)) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (video.paused) {
      video.play().catch(() => undefined);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleSound}
      className={cn("group block overflow-hidden bg-white text-left", className)}
      aria-label={muted ? "Play video with sound" : "Mute video"}
    >
      {isVideoAsset(src) ? (
        <video
          ref={videoRef}
          className={cn("h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]", mediaClassName)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={alt}
        >
          <source src={src} />
        </video>
      ) : (
        <img src={src} alt={alt} className={cn("h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]", mediaClassName)} />
      )}
    </button>
  );
}
