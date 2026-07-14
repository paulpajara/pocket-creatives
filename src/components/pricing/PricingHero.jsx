import React from "react";
import { MediaAsset } from "../MediaAsset";
import { pricingHero } from "../../data/siteContent";

export function PricingHero() {
  return (
    <section className="relative h-[920px] overflow-hidden bg-pocket-yellow mobile:h-auto mobile:min-h-[870px] mobile:pb-20 mobile:pt-[146px] desktop:h-[874px] wide:h-[1080px]">
      <div className="relative mx-auto h-full max-w-[1920px] mobile:px-6">
        <div className="pricing-hero-currency-outline pointer-events-none absolute left-[322px] top-[86px] z-0 hidden text-[950px] font-extrabold leading-none tracking-[-32px] wide:block">
          {"\u00A3"}
        </div>

        <div className="relative z-10 pt-[190px] mobile:pt-0 desktop:pl-[36px] desktop:pt-[140px] wide:pl-[228px] wide:pt-[214px]">
          <p className="text-[28px] font-extrabold leading-none tracking-[-1.4px] text-black mobile:text-[18px] mobile:tracking-[-0.4px] desktop:text-[34px] wide:text-[42px] wide:tracking-[-2.1px]">
            {pricingHero.eyebrow}
          </p>
          <h1 className="mt-[22px] max-w-[980px] text-[76px] font-extrabold leading-[1.03] tracking-[-4px] text-black mobile:mt-2 mobile:max-w-[400px] mobile:text-[47px] mobile:leading-[0.96] mobile:tracking-[-2.4px] desktop:max-w-[980px] desktop:text-[120px] desktop:tracking-[-5.6px] wide:max-w-[1030px] wide:text-[122px] wide:tracking-[-7.3px]">
            Pricing for
            <br />
            video production
            <br />
            and photography
          </h1>
          <div className="mt-8 hidden overflow-hidden bg-white mobile:block mobile:h-[244px] mobile:w-full">
            <MediaAsset src={pricingHero.media} alt={pricingHero.alt} className="h-full w-full object-cover" />
          </div>
          <div className="mt-[48px] max-w-[910px] text-[22px] font-medium leading-[1.04] tracking-[-1.1px] text-black mobile:mt-8 mobile:max-w-[382px] mobile:text-[20px] mobile:font-semibold mobile:leading-[1.22] mobile:tracking-[-0.8px] desktop:mt-[46px] desktop:max-w-[840px] desktop:text-[19px] desktop:leading-[1.04] wide:max-w-[920px] wide:text-[22px]">
            {pricingHero.copy.map((paragraph) => (
              <p key={paragraph} className="mb-6 mobile:mb-5 desktop:mb-5 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute overflow-hidden bg-white mobile:invisible desktop:right-[39px] desktop:top-[130px] desktop:block desktop:h-[650px] desktop:w-[410px] wide:right-[275px] wide:top-[190px] wide:h-[700px] wide:w-[460px]">
          <MediaAsset src={pricingHero.media} alt={pricingHero.alt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
