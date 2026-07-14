import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "./CarouselTrack";
import { features } from "../data/siteContent";
import { StickerButton } from "./StickerButton";

export function FeatureChecklist({ onContactClick }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="bg-pocket-yellow py-20 max-lg:h-[1760px] max-lg:py-0 lg:h-[1000px] lg:py-[202px] wide:h-[865px] wide:py-[124px]">
      <div className="relative mx-auto h-full w-[390px] max-w-[calc(100vw-40px)] lg:hidden">
        <h2 className="absolute left-0 top-[104px] w-full text-left text-[34px] font-extrabold leading-[0.95] tracking-[-1.7px] text-white">
          Services - <span className="text-pocket-blue">Check</span>{" "}
          <Check className="inline h-[30px] w-[30px] stroke-[3.5] text-pocket-blue" aria-hidden="true" />
          <br />
          Quality - <span className="text-pocket-blue">Check</span>{" "}
          <Check className="inline h-[30px] w-[30px] stroke-[3.5] text-pocket-blue" aria-hidden="true" />
          <br />
          People - <span className="text-pocket-blue">Check</span>
          <Check className="inline h-[30px] w-[30px] stroke-[3.5] text-pocket-blue" aria-hidden="true" />
        </h2>

        <div className="absolute left-0 top-[244px] grid w-full gap-[38px] text-left">
          {features.map((feature) => (
            <article key={feature.title} className="text-black">
              <h3 className="text-[30px] font-medium leading-none tracking-[-1.5px]">{feature.title}</h3>
              <p className="mt-[16px] text-[17px] font-medium leading-[1.12] tracking-[-0.85px]">{feature.copy}</p>
            </article>
          ))}
        </div>

        <StickerButton
          label="Say Hello"
          onClick={onContactClick}
          variant="blue"
          className="absolute left-[154px] top-[1638px] h-[82px] w-[82px] bg-white !text-[20px] !text-pocket-blue shadow-[4px_4px_4px_rgba(82,110,135,0.85)] hover:!bg-pocket-blue hover:!text-white"
        />
      </div>

      <div className="section-shell hidden lg:block">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="max-w-[1440px] text-5xl font-extrabold leading-none tracking-[-4px] text-white sm:text-6xl lg:text-[80px]">
            Services - <span className="text-pocket-blue">Check.</span>{" "}
            <Check className="inline h-12 w-12 text-pocket-blue sm:h-16 sm:w-16 lg:h-20 lg:w-20" aria-hidden="true" />
            <br />
            Quality - <span className="text-pocket-blue">Check.</span>{" "}
            <Check className="inline h-12 w-12 text-pocket-blue sm:h-16 sm:w-16 lg:h-20 lg:w-20" aria-hidden="true" />
            <br />
            People - <span className="text-pocket-blue">Check.</span>{" "}
            <Check className="inline h-12 w-12 text-pocket-blue sm:h-16 sm:w-16 lg:h-20 lg:w-20" aria-hidden="true" />
          </h2>
          <StickerButton
            label="Say Hello"
            onClick={onContactClick}
            variant="blue"
            className="bg-white !text-pocket-blue hover:!bg-pocket-blue hover:!text-white lg:mt-[69px] wide:mt-0 wide:h-[150px] wide:w-[150px] wide:text-[30px]"
          />
        </div>

        <div className="relative mt-14 overflow-hidden lg:mt-0 lg:h-[478px]" data-node-id="1:1292">
          <div className="lg:pt-[92px] wide:pt-0">
            <CarouselTrack slidesPerView="auto" spaceBetween={59} onSwiper={setSwiper}>
              {features.map((feature) => (
                <SwiperSlide key={feature.title} className="!w-[min(426px,calc(100vw-40px))]">
                  <article className="w-full text-black">
                    <h3 className="text-[30px] font-medium leading-none tracking-[-1.5px]">{feature.title}</h3>
                    <p className="mt-8 text-[20px] font-medium leading-[1.2] tracking-[-1px]">{feature.copy}</p>
                  </article>
                </SwiperSlide>
              ))}
            </CarouselTrack>
          </div>

          <div className="mt-[86px] flex gap-6 lg:absolute lg:left-0 lg:top-[422px] lg:mt-0">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-pocket-yellow text-black"
              aria-label="Previous feature"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white text-black"
              aria-label="Next feature"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
