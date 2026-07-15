import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";

function GalleryMedia({ item, thumbnail = false, active = false }) {
  if (item.video) {
    return (
      <video
        src={thumbnail || active ? item.video : undefined}
        aria-label={item.alt}
        className={cn(
          "h-full w-full bg-black object-contain",
          thumbnail && "pointer-events-none object-cover"
        )}
        controls={!thumbnail}
        autoPlay={!thumbnail && active}
        muted={thumbnail}
        loop={thumbnail}
        playsInline
        preload={thumbnail || active ? "metadata" : "none"}
      />
    );
  }

  return (
    <img
      src={item.image}
      alt={item.alt}
      className={cn("h-full w-full object-contain", thumbnail && "object-cover")}
      decoding="async"
    />
  );
}

export function PortfolioLightbox({ gallery, onClose }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(gallery?.index ?? 0);

  useEffect(() => {
    if (!gallery) return undefined;

    setActiveIndex(gallery.index);
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [gallery, onClose]);

  if (!gallery) return null;

  const { items, kind } = gallery;
  const selectItem = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/[0.85]"
      role="dialog"
      aria-modal="true"
      aria-label={`${kind} portfolio preview`}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-[100] inline-flex h-12 w-12 items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition-colors hover:bg-pocket-blue hover:text-white sm:right-7 sm:top-7"
        aria-label="Close preview"
      >
        <X className="h-7 w-7" />
      </button>

      <div className="flex h-full items-center justify-center px-4 pb-[112px] pt-[76px] sm:px-10 sm:pb-[138px] sm:pt-[36px]">
        <CarouselTrack
          key={`${kind}-${gallery.index}`}
          className="portfolio-preview-swiper h-full w-full max-w-[1280px]"
          overflowVisible={false}
          freeMode={false}
          grabCursor
          loop={false}
          initialSlide={gallery.index}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`} className="!flex items-center justify-center">
              <div className="h-full w-full">
                <GalleryMedia item={item} active={activeIndex === index} />
              </div>
            </SwiperSlide>
          ))}
        </CarouselTrack>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[96px] bg-[#303030] px-3 py-3 sm:h-[120px] sm:px-6">
        <div className="portfolio-thumbnail-strip mx-auto flex h-full max-w-[1280px] gap-3 overflow-x-auto sm:gap-5">
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item.title}-thumbnail-${index}`}
              onClick={() => selectItem(index)}
              className={cn(
                "h-full w-[126px] shrink-0 overflow-hidden border-[3px] bg-white transition-opacity sm:w-[174px]",
                activeIndex === index
                  ? "border-pocket-yellow opacity-100"
                  : "border-transparent opacity-[0.72] hover:opacity-100"
              )}
              aria-label={`View ${item.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <GalleryMedia item={item} thumbnail />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
