import React from "react";
import { ArrowDown } from "lucide-react";
import { trainingHowItWorksCopy } from "../../data/trainingContent";

export function TrainingHowItWorks() {
  return (
    <section className="flex min-h-[680px] items-center bg-pocket-blue py-24 text-white wide:min-h-[780px] wide:py-28 mobile:min-h-0 mobile:py-20">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-[1fr_240px] items-center gap-16 px-8 wide:px-0 mobile:block mobile:px-6">
        <div>
          <h2 className="text-[88px] font-extrabold leading-none tracking-[-4.4px] wide:text-[120px] wide:tracking-[-6px] mobile:text-[52px] mobile:leading-[0.95] mobile:tracking-[-2.6px]">
            How does it work?
          </h2>
          <div className="mt-14 max-w-[960px] space-y-5 text-[19px] font-medium leading-[1.2] tracking-[-0.55px] wide:text-[20px] mobile:mt-10 mobile:text-[18px] mobile:leading-[1.26] mobile:tracking-[-0.45px]">
            {trainingHowItWorksCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <a
          href="#example-courses"
          className="flex h-[230px] w-[230px] items-center justify-center text-white transition-transform hover:translate-y-2 mobile:mx-auto mobile:mt-10 mobile:h-28 mobile:w-28"
          aria-label="View example courses"
        >
          <ArrowDown className="h-full w-full stroke-[0.85]" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
