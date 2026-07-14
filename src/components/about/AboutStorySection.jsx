import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";

const STORY_TIMELINE_IMAGE = "/figma/our-story-timeline-1920-site.png";
const STORY_TIMELINE_MOBILE_IMAGE = "/figma/our-story-timeline-1920.png";
const STORY_IMAGE_WIDTH = 16858;
const STORY_IMAGE_HEIGHT = 3768;

function moveTimeline(swiper, direction) {
  if (!swiper) {
    return;
  }

  const start = swiper.minTranslate();
  const end = swiper.maxTranslate();
  const lowerBound = Math.min(start, end);
  const upperBound = Math.max(start, end);
  const current = swiper.getTranslate ? swiper.getTranslate() : swiper.translate;
  const distance = swiper.width * 0.82;
  const target = direction === "next" ? current - distance : current + distance;
  const clampedTarget = Math.max(lowerBound, Math.min(upperBound, target));

  swiper.translateTo(clampedTarget, 700, true, true);
}

function StoryControls({ swiper }) {
  return (
    <div className="absolute bottom-[58px] left-[248px] z-20 flex gap-4 desktop:left-[154px] mobile:hidden">
      <button
        type="button"
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => moveTimeline(swiper, "prev")}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition hover:bg-pocket-blue hover:text-white"
        aria-label="Previous story slide"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => moveTimeline(swiper, "next")}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition hover:bg-pocket-blue hover:text-white"
        aria-label="Next story slide"
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export function AboutStorySection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="about-story"
      className="relative h-[1000px] bg-pocket-canvas mobile:h-[600px] mobile:bg-pocket-yellow"
    >
      <div className="relative mx-auto h-full max-w-[1920px] overflow-visible px-[220px] desktop:px-[112px] mobile:px-[18px]">
        <div className="h-full overflow-visible">
          <CarouselTrack
            onSwiper={setSwiper}
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.72 }}
            grabCursor
            overflowVisible={false}
            slidesPerView="auto"
            speed={700}
            resistanceRatio={0.45}
            className="about-story-swiper h-full !overflow-visible"
          >
            <SwiperSlide className="!h-full !w-auto">
              <div className="relative h-full w-auto">
                <img
                  src={STORY_TIMELINE_IMAGE}
                  width={STORY_IMAGE_WIDTH}
                  height={STORY_IMAGE_HEIGHT}
                  alt="Pocket Creatives story timeline from 2017 to 2025"
                  loading="lazy"
                  draggable={false}
                  className="mt-12 h-[860px] w-auto max-w-none select-none object-contain desktop:mt-10 desktop:h-[820px] mobile:hidden"
                />
                <img
                  src={STORY_TIMELINE_MOBILE_IMAGE}
                  width={STORY_IMAGE_WIDTH}
                  height={STORY_IMAGE_HEIGHT}
                  alt="Pocket Creatives story timeline from 2017 to 2025"
                  loading="lazy"
                  draggable={false}
                  className="hidden h-[550px] w-auto max-w-none select-none object-contain mobile:block"
                />
              </div>
            </SwiperSlide>
          </CarouselTrack>
        </div>

        <StoryControls swiper={swiper} />
      </div>
    </section>
  );
}
