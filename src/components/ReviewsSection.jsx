import React from "react";
import { Autoplay } from "swiper/modules";
import { CarouselTrack, SwiperSlide } from "./CarouselTrack";
import { asset, reviews } from "../data/siteContent";
import { VideoThumb } from "./VideoThumb";

const desktopReviews = [reviews[5], reviews[0], reviews[1], reviews[2], reviews[3], reviews[4]];

export function ReviewsSection({ onContactClick }) {
  return (
    <section className="bg-pocket-canvas py-20 max-lg:h-[924px] max-lg:py-0 lg:h-[900px] lg:py-0 wide:h-[984px] wide:py-0">
      <div className="relative mx-auto h-full w-[390px] max-w-[calc(100vw-40px)] lg:hidden">
        <h2 className="absolute left-px top-0 w-[381px] whitespace-pre-wrap text-[35px] font-extrabold leading-none tracking-[-1.75px] text-black">
          Go behind the scenes of our <span className="text-pocket-blue underline decoration-pocket-yellow decoration-4">5 Star</span> Service
        </h2>
        <div className="absolute left-px top-[90px] flex items-start gap-[9px]">
          <img src={asset("icon-google.svg")} alt="Google" className="h-[30px] w-[30px]" />
          <p className="w-[220px] text-[16px] font-extrabold leading-none tracking-[-0.8px] text-pocket-ink">
            Based on
            <br />
            88 reviews
          </p>
        </div>
        <div className="absolute left-0 top-[170px] w-[390px] overflow-hidden">
          <CarouselTrack
            slidesPerView="auto"
            spaceBetween={16}
            loop
            freeMode={false}
            grabCursor={false}
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={650}
            slidesPerGroup={1}
            className="h-[360px]"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <SwiperSlide key={`mobile-${review.name}-${index}`} className="!w-[357px]">
                <article className="h-[293px] w-[357px] rounded-[32px] bg-[#e6e6e6] p-3">
                  <div className="h-[226px] rounded-3xl bg-white px-[18px] py-[18px]">
                    <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.9px] text-black">
                      {review.quote}
                    </p>
                  </div>
                  <p className="mt-4 px-[14px] text-[20px] font-extrabold leading-none tracking-[-1px] text-pocket-muted">
                    {review.name}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1440px] lg:block wide:hidden" data-node-id="1:1278">
        <div className="absolute left-[37px] top-[181px] w-[632px]">
          <h2 className="text-[80px] font-extrabold leading-[1.08] tracking-[-4px] text-black">
            Go behind the
            <br />
            scenes of our
            <br />
            <span className="text-pocket-yellow underline decoration-pocket-yellow decoration-[5px] underline-offset-[18px]">
              5 Star
            </span>{" "}
            Service
          </h2>
          <div className="mt-[43px] flex items-center gap-5">
            <img src={asset("icon-google.svg")} alt="Google" className="h-[60px] w-[60px]" />
            <p className="text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black">
              Based on
              <br />
              88 reviews
            </p>
          </div>
        </div>

        <VideoThumb
          src={asset("video/service-video.mp4")}
          alt="Behind the scenes video thumbnail"
          label="Open enquiry after watching behind the scenes"
          onClick={onContactClick}
          className="absolute left-[755px] top-[182px] h-[360px] w-[645px]"
          showPlay={false}
        />

        <div className="absolute left-5 top-[604px] w-[1420px] overflow-hidden">
          <CarouselTrack
            slidesPerView="auto"
            spaceBetween={16}
            loop
            freeMode={false}
            grabCursor={false}
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={650}
            slidesPerGroup={1}
            data-node-id="1:1280"
          >
            {[...desktopReviews, ...desktopReviews].map((review, index) => (
              <SwiperSlide key={`${review.name}-${index}`} className="!w-[357px]">
                <article className="h-[293px] w-[357px] rounded-[32px] bg-[#e6e6e6] p-3">
                  <div className="h-[226px] rounded-3xl bg-white px-[18px] py-[18px]">
                    <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.9px] text-black">
                      {review.quote}
                    </p>
                  </div>
                  <p className="mt-4 px-[14px] text-[20px] font-extrabold leading-none tracking-[-1px] text-pocket-muted">
                    {review.name}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <div className="absolute left-[277px] top-[116px] w-[632px]">
          <h2 className="text-[80px] font-extrabold leading-[1.1] tracking-[-4px] text-pocket-muted">
            Go behind the
            <br />
            scenes of our
            <br />
            <span className="text-pocket-blue underline decoration-pocket-blue decoration-[6px] underline-offset-[16px]">
              5 Star
            </span>{" "}
            Service
          </h2>
          <div className="mt-10 flex items-center gap-4">
            <img src={asset("icon-google.svg")} alt="Google" className="h-[60px] w-[60px]" />
            <p className="text-[30px] font-extrabold leading-none tracking-[-1.5px] text-pocket-muted">
              Based on
              <br />
              88 reviews
            </p>
          </div>
        </div>

        <VideoThumb
          src={asset("video/service-video.mp4")}
          alt="Behind the scenes video thumbnail"
          label="Open enquiry after watching behind the scenes"
          onClick={onContactClick}
          className="absolute left-[995px] top-[107px] h-[384px] w-[667px]"
          showPlay={false}
        />

        <div className="absolute left-5 top-[530px] w-[1900px] overflow-hidden">
          <CarouselTrack
            slidesPerView="auto"
            spaceBetween={16}
            loop
            freeMode={false}
            grabCursor={false}
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={650}
            slidesPerGroup={1}
            data-node-id="1:1280"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <SwiperSlide key={`${review.name}-${index}`} className="!w-[357px]">
                <article className="h-[293px] w-[357px] rounded-[32px] bg-[#e6e6e6] p-3">
                  <div className="h-[226px] rounded-3xl bg-white px-[18px] py-[18px]">
                    <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.9px] text-black">
                      {review.quote}
                    </p>
                  </div>
                  <p className="mt-4 px-[14px] text-[20px] font-extrabold leading-none tracking-[-1px] text-pocket-muted">
                    {review.name}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>
      </div>
    </section>
  );
}
