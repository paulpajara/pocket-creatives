import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { worksProcessItems } from "../../data/siteContent";
import { OutlineNumber } from "../shared/OutlineNumber";
import { cn } from "../../utils/cn";

function GiantStepNumber({ number }) {
  return (
    <OutlineNumber
      number={number}
      className="pointer-events-none absolute left-[126px] top-[65px] select-none text-[800px] font-extrabold leading-none [--step-stroke:18px] max-lg:left-[45px] max-lg:top-[118px] max-lg:text-[430px] max-lg:[--step-stroke:10px] wide:left-[190px] wide:top-0 wide:text-[1100px] wide:[--step-stroke:24px]"
      stroke="var(--step-stroke) rgba(0, 126, 153, 0.26)"
    />
  );
}

export function WorksProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[781px] bg-pocket-blue max-lg:mt-0 max-lg:h-[680px] max-lg:px-0 max-lg:py-0 wide:-mt-[85px] wide:h-[1100px] wide:bg-transparent">
      <div className="absolute inset-0 bg-pocket-blue max-lg:hidden wide:top-[85px] wide:h-[932px]" />
      <div className="relative mx-auto h-full max-w-[1920px] overflow-hidden max-lg:h-full max-lg:px-[25px] max-lg:pb-[28px] max-lg:pt-[64px]">
        <GiantStepNumber number="1" />

        <div className="absolute left-[126px] top-[175px] w-[1189px] max-lg:static max-lg:w-full wide:left-[226px] wide:top-[314px] wide:w-[1437px]">
          {worksProcessItems.map((item, index) => {
            const isActive = activeIndex === index;
            const isLongTitle = item.title.length > 32;

            return (
              <div key={item.title} className={cn(index === 0 ? "" : "mt-[30px] max-lg:mt-[24px] wide:mt-[30px]")}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={isActive}
                  className={cn(
                    "group inline-flex max-w-full items-center justify-start gap-[18px] text-left font-extrabold leading-none transition-[background-color,color,min-width,transform] duration-500 ease-out max-lg:w-full max-lg:justify-between max-lg:gap-2 max-lg:bg-pocket-yellow max-lg:px-[20px] max-lg:text-black",
                    isActive
                      ? "h-[116px] w-fit min-w-[902px] bg-pocket-yellow px-[31px] text-black max-lg:h-[74px] max-lg:min-w-0 max-lg:px-[20px] max-lg:py-0 wide:h-[134px] wide:min-w-[1102px]"
                      : "w-fit text-white hover:text-pocket-yellow max-lg:h-[74px] max-lg:text-black"
                  )}
                >
                  <span
                    className={cn(
                      "min-w-0 whitespace-nowrap max-lg:whitespace-normal max-lg:leading-[0.9] wide:text-[70px]",
                      isLongTitle ? "text-[58px] max-lg:text-[24px]" : "text-[64px] max-lg:text-[24px]"
                    )}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-[34px] w-[34px] shrink-0 stroke-[3] transition-transform duration-500 ease-out max-lg:h-[36px] max-lg:w-[36px] max-lg:text-black",
                      isActive ? "rotate-180 text-black" : "text-white max-lg:text-black"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={cn(
                    "grid w-[1189px] transition-[grid-template-rows,opacity,margin] duration-500 ease-out max-lg:w-full wide:w-[1226px]",
                    isActive ? "mt-[31px] grid-rows-[1fr] opacity-100 max-lg:mt-[31px] wide:mt-[26px]" : "mt-0 grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden space-y-[18px] text-[20px] font-medium leading-none text-white max-lg:space-y-[20px] max-lg:text-[19px] max-lg:leading-none">
                    {item.copy.map((copy) => (
                      <p key={copy}>{copy}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
