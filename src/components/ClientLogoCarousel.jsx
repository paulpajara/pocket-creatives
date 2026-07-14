import React from "react";
import { Autoplay } from "swiper/modules";
import { CarouselTrack, SwiperSlide } from "./CarouselTrack";
import { logoGroups } from "../data/siteContent";
import { cn } from "../utils/cn";

export function ClientLogoCarousel({
  className,
  gridClassName,
  cardClassName,
  imageClassName,
  groups = logoGroups,
  heightClassName = "h-[340px]",
  autoplayDelay = 2200
}) {
  return (
    <CarouselTrack
      modules={[Autoplay]}
      freeMode={false}
      grabCursor={false}
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      loop
      speed={700}
      slidesPerView={1}
      overflowVisible={false}
      className={cn(heightClassName, "!overflow-hidden", className)}
    >
      {groups.map((group, groupIndex) => (
        <SwiperSlide key={`logo-group-${groupIndex}`}>
          <div className={cn("grid h-full w-full grid-cols-3 gap-4 overflow-hidden", gridClassName)}>
            {group.map((logo) => (
              <div
                key={logo.src}
                className={cn(
                  "flex h-[100px] w-full items-center justify-center rounded-2xl bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
                  cardClassName
                )}
              >
                <img src={logo.src} alt={logo.alt} className={cn("max-h-20 w-full object-contain", imageClassName)} />
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </CarouselTrack>
  );
}
