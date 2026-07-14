import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../utils/cn";

export { SwiperSlide };

export function CarouselTrack({
  children,
  className,
  modules = [],
  freeMode = true,
  grabCursor = true,
  overflowVisible = true,
  slidesPerView = "auto",
  ...props
}) {
  const moduleList = freeMode ? [FreeMode, ...modules] : modules;

  return (
    <Swiper
      modules={moduleList}
      freeMode={freeMode}
      grabCursor={grabCursor}
      slidesPerView={slidesPerView}
      className={cn(overflowVisible && "!overflow-visible", className)}
      {...props}
    >
      {children}
    </Swiper>
  );
}
