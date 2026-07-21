import React from "react";
import { trainingTestimonial } from "../../data/trainingContent";

function RiverGroupMark() {
  return (
    <div className="w-[300px] bg-white px-7 py-8 text-black mobile:w-[220px] mobile:px-5 mobile:py-6" aria-label="River Group Content Innovation">
      <p className="text-[46px] font-extrabold leading-[0.72] tracking-[-2.3px] mobile:text-[34px]">RIVER</p>
      <p className="ml-[62px] text-[40px] font-light leading-[0.82] tracking-[-2px] mobile:ml-[45px] mobile:text-[30px]">GROUP</p>
      <p className="mt-3 text-[13px] font-medium tracking-[0.05em] text-neutral-500 mobile:text-[10px]">CONTENT INNOVATION</p>
    </div>
  );
}

export function TrainingTestimonial() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-pocket-canvas py-24 wide:min-h-[916px] mobile:min-h-0 mobile:py-20">
      <div className="pointer-events-none absolute left-[10%] top-[105px] text-[300px] font-light leading-none text-black/[0.08] mobile:left-3 mobile:top-10 mobile:text-[160px]">“</div>
      <div className="pointer-events-none absolute bottom-[70px] right-[10%] rotate-180 text-[300px] font-light leading-none text-black/[0.08] mobile:bottom-12 mobile:right-3 mobile:text-[160px]">“</div>

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[300px_1fr] items-center gap-16 px-8 wide:px-0 mobile:block mobile:px-6">
        <RiverGroupMark />
        <div className="mobile:mt-10">
          <p className="text-[21px] font-medium leading-[1.3] tracking-[-0.65px] text-pocket-muted wide:text-[23px] mobile:text-[18px] mobile:leading-[1.35] mobile:text-black">
            {trainingTestimonial.quote}
          </p>
          <p className="mt-8 inline bg-pocket-yellow px-2 py-1 text-[24px] font-extrabold leading-[1.1] tracking-[-1.2px] text-black mobile:text-[19px] mobile:tracking-[-0.75px]">
            {trainingTestimonial.attribution}
          </p>
        </div>

        <div className="absolute -right-2 -top-[138px] flex h-[160px] w-[160px] rotate-6 items-center justify-center rounded-full bg-pocket-blue text-center text-[26px] font-extrabold leading-[0.95] text-white shadow-button wide:-right-12 wide:-top-[170px] wide:h-[190px] wide:w-[190px] wide:text-[30px] mobile:right-6 mobile:top-[-60px] mobile:h-[110px] mobile:w-[110px] mobile:text-[19px]">
          What
          <br />
          They Say
        </div>
      </div>
    </section>
  );
}
