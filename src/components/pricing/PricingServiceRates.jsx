import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { MediaAsset } from "../MediaAsset";
import { pricingServiceSlides } from "../../data/siteContent";
import { cn } from "../../utils/cn";

export function PricingServiceRates() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section id="service-rates" className="relative overflow-hidden bg-pocket-yellow mobile:h-auto desktop:h-[884px] wide:h-[1080px]">
      <div className="hidden mobile:block">
        {pricingServiceSlides.map((slide) => {
          const isPhotography = slide.title.toLowerCase().startsWith("photography");

          return (
            <div
              key={slide.title}
              className={cn(
                "min-h-[950px] px-6 py-[68px]",
                isPhotography ? "bg-pocket-blue text-white" : "bg-pocket-yellow text-black"
              )}
            >
              <h2 className="max-w-[382px] text-[54px] font-extrabold leading-[0.93] tracking-[-2.9px]">
                {slide.title}
              </h2>
              <div className="mt-9 h-[250px] w-full overflow-hidden bg-white">
                <MediaAsset src={slide.media} alt={slide.alt} className="h-full w-full object-cover" />
              </div>
              <div className="mt-9 max-w-[382px] text-[18px] font-medium leading-[1.08] tracking-[-0.85px]">
                {slide.copy.map((paragraph, index) => (
                  <p key={index} className={index === slide.copy.length - 1 ? "mt-6" : "mb-5"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-full mobile:hidden">
        <CarouselTrack
          freeMode={false}
          grabCursor={false}
          loop
          onSwiper={setSwiper}
          overflowVisible={false}
          slidesPerView={1}
          className="h-full"
        >
          {pricingServiceSlides.map((slide) => {
            const isPhotography = slide.title.toLowerCase().startsWith("photography");
            const ArrowIcon = isPhotography ? ArrowLeft : ArrowRight;

            return (
              <SwiperSlide key={slide.title} className="!h-full">
                <div
                  className={cn(
                    "relative mx-auto h-full max-w-[1920px] px-6 desktop:px-[40px] wide:px-0",
                    isPhotography ? "bg-pocket-blue" : "bg-pocket-yellow"
                  )}
                >
                  <h2
                    className={cn(
                      "pt-[106px] text-[88px] font-extrabold leading-none tracking-[-4.4px] desktop:pt-[142px] desktop:text-[112px] desktop:tracking-[-6px] wide:absolute wide:top-[158px] wide:p-0 wide:text-[122px] wide:tracking-[-7.3px]",
                      isPhotography
                        ? "text-white desktop:ml-[145px] wide:left-[372px] wide:ml-0"
                        : "text-black wide:left-[238px]"
                    )}
                  >
                    {slide.title}
                  </h2>

                  <div
                    className={cn(
                      "mt-[64px] grid items-start gap-[42px] wide:contents",
                      isPhotography
                        ? "desktop:mt-[44px] desktop:grid-cols-[170px_430px_minmax(0,1fr)] desktop:gap-[32px]"
                        : "desktop:mt-[50px] desktop:grid-cols-[490px_minmax(0,1fr)_178px] desktop:gap-[30px]"
                    )}
                  >
                    <div
                      className={cn(
                        "h-[492px] w-full overflow-hidden bg-white wide:absolute wide:top-[338px] wide:h-[600px] wide:w-[492px]",
                        isPhotography
                          ? "desktop:order-2 desktop:h-[430px] desktop:w-[430px] wide:left-[388px]"
                          : "desktop:h-[490px] desktop:w-[490px] wide:left-[256px]"
                      )}
                    >
                      <MediaAsset src={slide.media} alt={slide.alt} className="h-full w-full object-cover" />
                    </div>

                    <div
                      className={cn(
                        "max-w-[690px] text-[23px] font-medium leading-[0.98] tracking-[-1.15px] wide:absolute wide:top-[340px] wide:w-[690px] wide:text-[23px] wide:tracking-[-1.15px]",
                        isPhotography
                          ? "text-white desktop:order-3 desktop:max-w-[570px] desktop:text-[18px] desktop:leading-[0.96] desktop:tracking-[-0.82px] wide:left-[904px]"
                          : "text-black desktop:max-w-[648px] desktop:text-[18px] desktop:leading-[0.96] desktop:tracking-[-0.82px] wide:left-[772px]"
                      )}
                    >
                      {slide.copy.map((paragraph, index) => (
                        <p
                          key={index}
                          className={cn(
                            index === slide.copy.length - 1
                              ? cn("mt-[28px]", isPhotography ? "desktop:mt-[14px]" : "desktop:mt-[18px]")
                              : cn("mb-[24px]", isPhotography ? "desktop:mb-[13px]" : "desktop:mb-[17px]")
                          )}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => (isPhotography ? swiper?.slidePrev() : swiper?.slideNext())}
                      className={cn(
                        "mt-[135px] flex h-[226px] w-[226px] flex-col items-center justify-center rounded-full shadow-[7px_8px_7px_rgba(0,0,0,0.24)] transition wide:absolute wide:top-[485px] wide:mt-0 wide:h-[177px] wide:w-[177px]",
                        isPhotography
                          ? "bg-pocket-yellow text-black hover:bg-white desktop:order-1 desktop:mt-[118px] desktop:h-[155px] desktop:w-[155px] wide:left-[166px]"
                          : "bg-pocket-blue text-white hover:bg-pocket-ink desktop:mt-[145px] desktop:h-[177px] desktop:w-[177px] wide:left-[1460px]"
                      )}
                    >
                      <span className="text-[23.5px] font-extrabold leading-none tracking-[-1.4px] desktop:text-[21px] wide:text-[23.5px]">
                        {slide.cta}
                      </span>
                      <ArrowIcon className="mt-4 h-[34px] w-[34px] desktop:h-[28px] desktop:w-[28px] wide:h-[34px] wide:w-[34px]" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </CarouselTrack>
      </div>
    </section>
  );
}
