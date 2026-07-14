import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { MediaAsset } from "../MediaAsset";
import { serviceSnippetItems } from "../../data/siteContent";

export function ServiceSnippetCarousel() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative h-[1000px] overflow-hidden border-t-[3px] border-pocket-yellow bg-pocket-canvas px-0 py-0 desktop:h-[785px] desktop:px-0 desktop:py-0 wide:h-[780px] wide:border-t-0 wide:px-0 wide:py-0">
      <div className="relative mx-auto h-full max-w-[1920px] desktop:pt-[300px] wide:pt-[164px]">
        <h2 className="absolute left-[30px] top-[171px] font-extrabold leading-none tracking-[-1.8px] text-black text-[36px] desktop:left-[35px] desktop:top-[128px] desktop:text-[64px] desktop:tracking-[-3.2px] wide:hidden">
          What we can offer
        </h2>
        <div className="absolute left-[22px] top-[228px] w-[calc(100vw-22px)] desktop:static desktop:ml-[35px] wide:static wide:ml-[278px]">
          <CarouselTrack slidesPerView="auto" spaceBetween={68} onSwiper={setSwiper}>
            {serviceSnippetItems.map((item) => (
              <SwiperSlide key={item.title} className="!w-[394px] max-w-[calc(100vw-44px)] desktop:!w-[760px] desktop:max-w-none wide:!w-[760px]">
                <article className="flex flex-col text-black desktop:grid desktop:grid-cols-[345px_348px] desktop:gap-[52px] wide:grid wide:grid-cols-[330px_360px] wide:gap-[70px] wide:text-pocket-muted">
                  <div className="order-2 mt-[47px] desktop:order-1 desktop:mt-0 wide:order-1 wide:mt-0">
                    <h3 className="text-[38px] font-medium leading-none tracking-[-1.9px] desktop:text-[26px] desktop:tracking-[-1.1px] wide:text-[34px] wide:tracking-[-1.5px]">{item.title}</h3>
                    <ul className="mt-[35px] list-disc pl-[31px] text-[25px] font-medium leading-[1.12] tracking-[-1.25px] desktop:mt-[38px] desktop:pl-5 desktop:text-[18px] desktop:leading-[1.18] desktop:tracking-[-0.65px] wide:mt-[36px] wide:text-[22px] wide:leading-[1.16] wide:tracking-[-0.8px]">
                      {item.bullets.map((bullet, index) => (
                        <li key={`${item.title}-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="mt-[29px] text-[24px] font-medium leading-[1.12] tracking-[-1.2px] desktop:mt-[26px] desktop:text-[18px] desktop:leading-[1.15] desktop:tracking-[-0.65px] wide:mt-[34px] wide:text-[22px] wide:leading-[1.16] wide:tracking-[-0.8px]">{item.copy}</p>
                  </div>
                  <div className="order-1 h-[319px] w-full overflow-hidden rounded-[4px] desktop:order-2 desktop:h-[282px] desktop:w-[348px] wide:order-2 wide:h-[310px] wide:w-[360px]">
                    <MediaAsset src={item.media} alt={item.alt} className="h-full w-full object-cover" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </CarouselTrack>

          <div className="mt-[56px] hidden gap-[23px] lg:flex">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-pocket-blue text-black transition hover:bg-pocket-yellow"
              aria-label="Previous service detail"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-pocket-blue text-black transition hover:bg-pocket-yellow"
              aria-label="Next service detail"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
