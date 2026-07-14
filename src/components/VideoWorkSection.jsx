import React, { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "./CarouselTrack";
import { MediaAsset } from "./MediaAsset";
import { asset, videoSlides } from "../data/siteContent";
import { StickerButton } from "./StickerButton";

export function VideoWorkSection({ onContactClick }) {
  const [mobileSwiper, setMobileSwiper] = useState(null);
  const [desktopSwiper, setDesktopSwiper] = useState(null);
  const mobileSwiperRef = useRef(null);

  const handleMobileSwiper = (swiper) => {
    mobileSwiperRef.current = swiper;
    setMobileSwiper(swiper);
  };

  const slideMobileVideo = (direction) => {
    const swiper = mobileSwiperRef.current || mobileSwiper;

    if (!swiper) {
      return;
    }

    if (direction === "prev") {
      swiper.slidePrev();
      return;
    }

    swiper.slideNext();
  };

  return (
    <section id="works" className="relative bg-pocket-canvas py-20 max-lg:h-[741px] max-lg:py-0 lg:h-[1003px] lg:pb-[129px] lg:pt-[160px] wide:h-[974px] wide:border-t-[3px] wide:border-pocket-yellow wide:pb-0 wide:pt-0">
      <div className="relative mx-auto h-full w-full max-w-[430px] lg:hidden">
        <div className="absolute left-6 top-[54px]">
          <img src={asset("icon-play.svg")} alt="" className="h-[50px] w-[50px]" />
          <h2 className="absolute left-0 top-[80px] w-[370px] whitespace-nowrap text-[40px] font-medium leading-none tracking-[-2px] text-pocket-muted">
            Video Production
          </h2>
        </div>

        <div className="absolute left-5 top-[214px] w-[410px] overflow-hidden">
          <CarouselTrack
            onSwiper={handleMobileSwiper}
            slidesPerView="auto"
            spaceBetween={16}
            freeMode={false}
            grabCursor
            className="h-[320px]"
          >
            {videoSlides.map((slide, index) => (
              <SwiperSlide key={slide.title} className="!h-[320px] !w-[360px]">
                <article className="relative h-full">
                  <h3 className="h-10 whitespace-nowrap text-[40px] font-extrabold leading-none tracking-[-2px] text-black">
                    {slide.title}
                  </h3>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="relative mt-[27px] block h-[202px] w-[360px] overflow-hidden rounded-md bg-pocket-paper"
                    aria-label={`Open enquiry for ${slide.title} video work`}
                  >
                    <MediaAsset src={slide.image} alt={`${slide.title} video work`} className="h-full w-full object-cover" />
                    {index === 0 ? (
                      <span className="absolute bottom-2 left-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pocket-yellow text-pocket-ink">
                        <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
                      </span>
                    ) : null}
                  </button>
                </article>
              </SwiperSlide>
            ))}
            <SwiperSlide className="!h-[320px] !w-[200px]">
              <a
                href="#works"
                className="flex h-full w-[177px] items-center text-[64px] font-extrabold leading-none tracking-[-3.2px] text-pocket-yellow underline underline-offset-4 transition-colors hover:text-pocket-yellow focus-visible:text-pocket-yellow"
              >
                View All.
              </a>
            </SwiperSlide>
          </CarouselTrack>
        </div>

        <div className="absolute left-5 top-[500px] flex h-8 items-center gap-[27px]" aria-label="Video carousel navigation">
          <button
            type="button"
            onClick={() => slideMobileVideo("prev")}
            className="relative z-10 inline-flex h-8 w-8 rotate-180 items-center justify-center rounded-full bg-pocket-blue text-pocket-ink"
            aria-label="Previous video category"
          >
            <ArrowRight className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => slideMobileVideo("next")}
            className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pocket-blue text-pocket-ink"
            aria-label="Next video category"
          >
            <ArrowRight className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />
          </button>
        </div>
        
        <StickerButton
          onClick={onContactClick}
          variant="yellow"
          className="absolute left-[155px] top-[568px] h-[120px] w-[120px] text-[22px]"
        />
      </div>

      <div className="section-shell hidden lg:block wide:hidden">
        <div className="mb-[83px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex h-[60px] w-[60px] items-center justify-center">
              <img src={asset("icon-play.svg")} alt="" className="h-[60px] w-[60px]" />
            </span>
            <h2 className="text-4xl font-medium leading-none tracking-[-2px] sm:text-[40px]">Video Production</h2>
          </div>
          <StickerButton onClick={onContactClick} icon aria-label="Talk about video production" />
        </div>

        <div className="-mx-5 overflow-hidden pl-5 sm:-mx-8 sm:pl-8 lg:-mx-[37px] lg:pl-[37px]">
          <CarouselTrack
            spaceBetween={60}
            data-node-id="1:1328"
          >
            {videoSlides.map((slide, index) => (
              <SwiperSlide
                key={slide.title}
                className="!h-[500px] !w-[min(712px,calc(100vw-40px))] lg:!h-[569px] lg:!w-[712px]"
              >
                <article className="relative h-full">
                  <h3 className="h-[96px] text-left text-5xl font-extrabold leading-none tracking-[-4px] text-black sm:text-[80px]">
                    {slide.title}
                  </h3>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="group relative mt-8 block h-[320px] w-full overflow-hidden rounded-xl bg-pocket-paper lg:mt-11 lg:h-[400px]"
                    aria-label={`Open enquiry for ${slide.title} video work`}
                  >
                    <MediaAsset
                      src={slide.image}
                      alt={`${slide.title} video work`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 bg-black/5 transition group-hover:bg-black/15" />
                    {index === 0 ? (
                      <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-pocket-ink shadow-soft transition group-hover:bg-pocket-yellow">
                        <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                      </span>
                    ) : null}
                  </button>
                </article>
              </SwiperSlide>
            ))}
            <SwiperSlide className="!h-[500px] !w-[307px] lg:!h-[569px]">
              <a
                href="#works"
                className="flex h-full w-[307px] flex-col justify-center text-[88px] font-extrabold leading-[1.2] tracking-[-6px] text-black underline decoration-solid underline-offset-4 transition-colors hover:text-pocket-yellow focus-visible:text-pocket-yellow lg:pt-20 lg:text-[120px]"
              >
                <span>View</span>
                <span>All.</span>
              </a>
            </SwiperSlide>
          </CarouselTrack>
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <img src={asset("icon-play.svg")} alt="" className="absolute left-[272px] top-[160px] h-[60px] w-[60px]" />
        <h2 className="absolute left-[360px] top-[183px] text-[40px] font-medium leading-none tracking-[-2px] text-pocket-muted">
          Video Production
        </h2>

        <StickerButton
          onClick={onContactClick}
          className="absolute left-[1495px] top-[72px] h-[150px] w-[150px] !text-[30px] shadow-[3px_3px_5px_rgba(82,110,135,0.8)]"
        />

        <div className="absolute left-[273px] top-[299px] w-[1647px] overflow-hidden">
          <CarouselTrack
            onSwiper={setDesktopSwiper}
            spaceBetween={60}
            data-node-id="1:1328"
            className="h-[572px]"
          >
            {videoSlides.map((slide, index) => (
              <SwiperSlide key={slide.title} className="!h-[572px] !w-[712px]">
                <article className="relative h-full">
                  <h3 className="h-[96px] text-left text-[80px] font-extrabold leading-none tracking-[-4px] text-black">
                    {slide.title}
                  </h3>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="group relative mt-[50px] block h-[400px] w-full overflow-hidden rounded-xl bg-pocket-paper"
                    aria-label={`Open enquiry for ${slide.title} video work`}
                  >
                    <MediaAsset
                      src={slide.desktopImage || slide.image}
                      alt={`${slide.title} video work`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 bg-black/5 transition group-hover:bg-black/15" />
                    {index === 0 ? (
                      <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-pocket-ink shadow-soft transition group-hover:bg-pocket-yellow">
                        <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                      </span>
                    ) : null}
                  </button>
                </article>
              </SwiperSlide>
            ))}
            <SwiperSlide className="!h-[572px] !w-[307px]">
              <a
                href="#works"
                className="flex h-full w-[307px] flex-col justify-center pt-[171px] text-[120px] font-extrabold leading-[1.2] tracking-[-6px] text-black underline decoration-solid underline-offset-4 transition-colors hover:text-pocket-yellow focus-visible:text-pocket-yellow"
              >
                <span>View</span>
                <span>All.</span>
              </a>
            </SwiperSlide>
          </CarouselTrack>
        </div>

        <div className="absolute left-[273px] top-[887px] flex h-8 items-center gap-[27px]" aria-label="Video carousel navigation">
          <button
            type="button"
            onClick={() => desktopSwiper?.slidePrev()}
            className="inline-flex h-8 w-8 rotate-180 items-center justify-center rounded-full bg-pocket-yellow text-pocket-ink"
            aria-label="Previous video category"
          >
            <ArrowRight className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => desktopSwiper?.slideNext()}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pocket-yellow text-pocket-ink"
            aria-label="Next video category"
          >
            <ArrowRight className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
