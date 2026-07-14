import React from "react";
import { pricingExplainers } from "../../data/siteContent";

export function PricingExplainerSection() {
  return (
    <section className="relative bg-pocket-blue text-white mobile:h-auto mobile:py-[40px] desktop:h-[1100px] wide:h-[1000px]">
      <div className="mx-auto flex h-full max-w-[1160px] flex-col justify-center px-6 mobile:max-w-none mobile:px-5 desktop:max-w-[1248px] wide:max-w-[1300px]">
        {pricingExplainers.map((block, index) => (
          <div key={block.title} className={index === 0 ? "" : "mt-[38px] mobile:mt-[32px] desktop:mt-[64px] wide:mt-[34px]"}>
            <h2 className={`block w-fit bg-pocket-yellow px-10 py-5 text-[42px] font-extrabold leading-none tracking-[-2.1px] text-black mobile:w-full mobile:whitespace-nowrap mobile:px-5 mobile:py-[20px] mobile:text-center mobile:text-[26px] mobile:tracking-[-0.9px] desktop:text-[70px] desktop:tracking-[-2.7px] wide:text-[80px] ${
              index === 1 ? "ml-auto" : "mr-auto"
            }`}>
              {block.title}
            </h2>
            <div className="mt-[18px] max-w-[1250px] space-y-[25px] text-[15px] font-light leading-[1.25] tracking-[-0.45px] text-white mobile:mt-[28px] mobile:max-w-none mobile:space-y-[20px] mobile:text-[16px] mobile:font-normal mobile:leading-[1.2] mobile:tracking-[-0.45px] desktop:w-[1150px] desktop:text-[20px] wide:w-[1600px] wide:text-[20px]">
              {block.copy.map((paragraph) => (
                <p key={paragraph} className="mb-3 last:mb-0 mobile:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
