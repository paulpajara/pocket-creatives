import React from "react";
import { Check } from "lucide-react";
import { MediaAsset } from "../MediaAsset";
import { pricingModel } from "../../data/siteContent";
import { cn } from "../../utils/cn";

function PriceBadge({ className, variant = "tag" }) {
  return (
    <img
      src={variant === "seal" ? "/figma/pricing/seal-pricing.png" : "/figma/pricing/tag-pricing.png"}
      alt=""
      aria-hidden="true"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function PricingModelSection() {
  return (
    <section className="relative overflow-hidden border-t-[4px] border-pocket-yellow bg-pocket-canvas mobile:h-auto mobile:py-[54px] desktop:h-[1120px] wide:h-[1850px]">
      <div className="relative mx-auto h-full max-w-[1440px] px-6 mobile:max-w-[430px] desktop:px-0 wide:max-w-[1920px] wide:px-0">
        <div className="desktop:absolute desktop:left-[122px] desktop:top-[88px] wide:absolute wide:left-[244px] wide:top-[62px]">
          <h2 className="text-[42px] font-bold leading-none tracking-[-2.1px] text-black mobile:text-[38px] mobile:font-extrabold mobile:tracking-[-1.3px] desktop:text-[75px] desktop:tracking-[-2.5px] wide:text-[70px]">
            {pricingModel.title}
          </h2>
          <ul className="mt-7 space-y-[6px] text-[18px] font-medium leading-none tracking-[-0.7px] text-black mobile:mt-5 mobile:text-[18px] mobile:tracking-[-0.4px] desktop:text-[35px] desktop:mt-[50px] wide:text-[30px]">
            {pricingModel.checks.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-[18px] w-[18px] flex-none stroke-[4] text-pocket-blue mobile:h-[12px] mobile:w-[12px] desktop:h-[23px] desktop:w-[23px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 hidden h-[430px] w-full overflow-hidden bg-white wide:absolute wide:left-[244px] wide:top-[300px] wide:mt-0 wide:block wide:h-[750px] wide:w-[1420px]">
          <MediaAsset src={pricingModel.media} alt="" className="h-full w-full object-contain" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-[1px] transition-transform hover:scale-105 wide:h-[185px] wide:w-[185px]"
            aria-label="Play pricing model video"
          >
            <span
              aria-hidden="true"
              className="ml-[10px] h-0 w-0 border-y-[34px] border-l-[58px] border-y-transparent border-l-[#ff120c] wide:ml-[12px] wide:border-y-[42px] wide:border-l-[72px]"
            />
          </button>
        </div>

        <div className="relative mt-10 grid gap-6 mobile:grid-cols-1 desktop:absolute desktop:left-[72px] desktop:top-[430px] desktop:mt-0 desktop:w-[1296px] desktop:grid-cols-2 desktop:gap-[72px] wide:absolute wide:left-[330px] wide:top-[1200px] wide:mt-0 wide:w-[1260px] wide:grid-cols-2 wide:gap-[34px]">
          {pricingModel.cards.map((card, index) => (
            <article
              key={card.title}
              className="relative min-h-[210px] bg-pocket-blue px-9 py-8 text-center text-white mobile:min-h-[300px] mobile:px-[42px] mobile:py-8 desktop:min-h-[545px] desktop:px-[58px] desktop:py-[70px] wide:min-h-[540px] wide:px-14 wide:py-10"
            >
              <h3 className="mx-auto max-w-[280px] text-[19px] font-extrabold leading-[1.05] tracking-[-0.8px] mobile:max-w-[360px] mobile:text-[26px] desktop:max-w-[460px] desktop:text-[35px] desktop:tracking-[-1.4px] wide:max-w-[550px] wide:text-[40px]">
                {card.title}
              </h3>
              <p className="mx-auto mt-8 max-w-[280px] text-left text-[12px] font-light leading-[1.25] tracking-[-0.3px] mobile:mt-7 mobile:text-[16px] desktop:mt-[60px] desktop:max-w-[435px] desktop:text-[20px] desktop:leading-[1.12] wide:max-w-[450px] wide:text-[20px]">
                {card.copy}
              </p>
              <PriceBadge
                variant={index === 0 ? "tag" : "seal"}
                className={cn(
                  "absolute object-contain",
                  index === 0
                    ? "-left-7 -top-7 h-[72px] w-[96px] mobile:-left-10 mobile:-top-12 mobile:h-[108px] mobile:w-[126px] desktop:-left-[60px] desktop:-top-[75px] desktop:h-[170px] desktop:w-[170px] wide:-left-14 wide:-top-[80px] wide:h-[175px] wide:w-[185px]"
                    : "-bottom-8 -right-8 h-[86px] w-[86px] mobile:-right-6 mobile:-top-8 mobile:h-[98px] mobile:w-[98px] desktop:-bottom-10 desktop:-right-9 desktop:h-[140px] desktop:w-[140px] wide:-bottom-12 wide:-right-12 wide:h-[150px] wide:w-[150px]"
                )}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
