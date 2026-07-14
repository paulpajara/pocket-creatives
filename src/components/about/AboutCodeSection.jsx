import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { aboutCodeItems } from "../../data/siteContent";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";

function CodeCard({ item }) {
  return (
    <article className="grid grid-cols-[78px_1fr] gap-[28px] text-black desktop:grid-cols-[62px_1fr] desktop:gap-[24px] mobile:grid-cols-[54px_1fr] mobile:gap-4">
      <div className="text-[82px] font-medium leading-none tracking-[-4px] text-pocket-blue desktop:text-[78px] desktop:tracking-[-3.8px] mobile:text-[66px] mobile:tracking-[-3px]">
        {item.number}
      </div>
      <div className="pt-[18px] desktop:pt-[16px] mobile:pt-2">
        <h3 className="max-w-[420px] text-[34px] font-extrabold leading-[1.04] tracking-[-1.7px] desktop:max-w-[360px] desktop:text-[28px] desktop:tracking-[-1.4px] mobile:text-[28px] mobile:tracking-[-1.3px]">
          {item.title}
        </h3>
        <p className="mt-[29px] text-[16px] font-medium leading-none tracking-[-0.8px] text-pocket-blue desktop:text-[14px] mobile:mt-8 mobile:text-[15px]">
          {item.why}
        </p>
        <p className="mt-[25px] max-w-[500px] text-[17px] font-medium leading-[1.16] tracking-[-0.8px] desktop:max-w-[420px] desktop:text-[14px] desktop:leading-[1.16] mobile:mt-5 mobile:max-w-none mobile:text-[16px] mobile:leading-[1.18]">
          {item.whyCopy}
        </p>
        <p className="mt-[29px] text-[16px] font-medium leading-none tracking-[-0.8px] text-pocket-yellow desktop:text-[14px] mobile:mt-8 mobile:text-[15px]">
          {item.how}
        </p>
        <p className="mt-[25px] max-w-[500px] text-[17px] font-medium leading-[1.16] tracking-[-0.8px] desktop:max-w-[420px] desktop:text-[14px] desktop:leading-[1.16] mobile:mt-5 mobile:max-w-none mobile:text-[16px] mobile:leading-[1.18]">
          {item.howCopy}
        </p>
      </div>
    </article>
  );
}

export function AboutCodeSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative h-[820px] bg-pocket-canvas desktop:h-[768px] mobile:h-auto mobile:py-[86px] desktop:visible mobile:visible invisible">
      <div className="relative mx-auto h-full max-w-[1920px] overflow-hidden mobile:flex mobile:h-auto mobile:flex-col mobile:px-6">
        <h2 className="absolute left-1/2 top-[88px] -translate-x-1/2 text-center text-[88px] font-extrabold leading-none tracking-[-4.4px] text-black desktop:top-[88px] desktop:text-[82px] desktop:tracking-[-4.1px] mobile:static mobile:translate-x-0 mobile:text-left mobile:text-[58px] mobile:tracking-[-2.9px]">
          Our Code
        </h2>
        <p className="absolute left-1/2 top-[196px] w-[620px] -translate-x-1/2 text-center text-[18px] font-medium leading-[1.12] tracking-[-0.9px] text-black desktop:top-[196px] desktop:w-[560px] desktop:text-[14px] desktop:tracking-[-0.7px] mobile:static mobile:mt-6 mobile:w-full mobile:translate-x-0 mobile:text-left mobile:text-[18px] mobile:leading-[1.22]">
          We are happy to publish our internal values for the world to see, as this gives you an overview of how we
          conduct ourselves and our business. Here are the guidelines that we happily work to...
        </p>

        <div className="absolute left-[250px] top-[328px] w-[1440px] desktop:left-[172px] desktop:top-[322px] desktop:w-[970px] mobile:static mobile:mt-12 mobile:w-full">
          <CarouselTrack
            slidesPerView="auto"
            spaceBetween={92}
            onSwiper={setSwiper}
            overflowVisible={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 92
              }
            }}
            className="h-[390px] !overflow-hidden desktop:h-[370px] mobile:h-[570px]"
          >
            {aboutCodeItems.map((item) => (
              <SwiperSlide key={item.number} className="!w-[630px] desktop:!w-[565px] mobile:!w-full">
                <CodeCard item={item} />
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>

        <div className="absolute bottom-[64px] left-[250px] flex gap-4 desktop:bottom-[44px] desktop:left-[172px] mobile:static mobile:mt-8">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pocket-blue text-white transition hover:bg-pocket-yellow hover:text-black"
            aria-label="Previous code item"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pocket-yellow text-black transition hover:bg-pocket-blue hover:text-white"
            aria-label="Next code item"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
