import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { aboutReasons, aboutReasonsResponsive } from "../../data/siteContent";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { cn } from "../../utils/cn";

function ReasonCarousel({ reasons, className = "", compact = false }) {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  const handleNext = () => {
    const activeSwiper = swiperRef.current || swiper;
    if (!activeSwiper || activeSwiper.destroyed) return;

    activeSwiper.update();
    activeSwiper.slideNext(650);
    activeSwiper.autoplay?.start?.();
  };

  return (
    <div className={cn("relative h-full flex-col", className)}>
      <CarouselTrack
        modules={[Autoplay]}
        freeMode={false}
        initialSlide={0}
        rewind
        autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: false }}
        speed={650}
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={38}
        centeredSlides={false}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        observer
        observeParents
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 38
          }
        }}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
          setSwiper(swiperInstance);
          window.requestAnimationFrame(() => swiperInstance.slideTo(0, 0));
        }}
        className="min-h-0 min-w-0 max-w-full flex-1 !w-full !overflow-hidden"
      >
        {reasons.map((reason) => (
          <SwiperSlide key={reason.title} className="left-[20px] !w-[400px] desktop:!w-[310px] mobile:!w-full">
            <article>
              <h3
                className={cn(
                  "text-[30px] font-extrabold leading-[1.05] tracking-[-1px] desktop:text-[20px] mobile:text-[28px] mobile:tracking-[-1.4px]",
                  compact && "desktop:text-[18px] desktop:leading-none"
                )}
              >
                {reason.title}
              </h3>
              <p
                className={cn(
                  "mt-[32px] text-[20px] w-[350px] font-light leading-[1.08] tracking-[-0.7px] desktop:mt-[26px] desktop:w-[300px] desktop:text-[14px] desktop:leading-[1.08] mobile:mt-8 mobile:text-[17px] mobile:w-[280px] mobile:leading-[1.1] mobile:tracking-[-0.85px]",
                  compact && "desktop:mt-[20px] desktop:text-[11px] desktop:leading-[1.08] desktop:tracking-[-0.35px]"
                )}
              >
                {reason.copy}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </CarouselTrack>
      <button
        type="button"
        onClick={handleNext}
        className="relative z-20 top-[25px] inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-pocket-yellow text-black transition hover:bg-white desktop:mt-[26px] mobile:mt-8 mobile:top-[5px] mobile:h-10 mobile:w-10 desktop:visible mobile:visible invisible"
        aria-label="Next reason"
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export function AboutWhySection() {
  return (
    <section className="relative h-[880px] bg-pocket-yellow text-black desktop:h-[866px] mobile:h-auto mobile:py-[86px]">
      <div className="relative mx-auto h-full max-w-[1920px] overflow-hidden mobile:flex mobile:h-auto mobile:flex-col mobile:px-6">
        <h2 className="absolute left-[140px] top-[88px] text-[120px] font-extrabold leading-none tracking-[-4px] text-white desktop:left-[108px] desktop:top-[125px] desktop:text-[78px] desktop:tracking-[-3.9px] mobile:static mobile:text-[58px] mobile:tracking-[-2.9px]">
          Why work with us?
        </h2>
        <p className="absolute left-[155px] top-[230px] w-[1400px] text-[25px] font-medium leading-[1.5] tracking-[-1px] text-black desktop:left-[114px] desktop:top-[234px] desktop:w-[1030px] desktop:text-[27px] desktop:leading-[1.34] desktop:tracking-[-1.25px] mobile:static mobile:mt-8 mobile:w-full mobile:text-[25px] mobile:leading-[1.25] mobile:tracking-[-1.1px]">
          We make content that feels real and works hard. You get a team that listens, adapts, and delivers with care, 
          creativity, and no fuss. We&apos;re here to help you stand out without making things complicated.      
        </p>

        <div className="absolute left-[140px] top-[350px] h-[402px] w-[1780px] overflow-hidden bg-pocket-blue px-[43px] py-[35px] text-white desktop:left-[80px] desktop:top-[392px] desktop:h-[340px] desktop:w-[1360px] desktop:px-[32px] desktop:py-[42px] mobile:static mobile:mt-10 mobile:h-[620px] mobile:w-full mobile:px-7 mobile:py-8">
          <ReasonCarousel reasons={aboutReasons} className="hidden wide:flex" />
          <ReasonCarousel reasons={aboutReasonsResponsive} className="flex wide:hidden" compact />
        </div>
      </div>
    </section>
  );
}
