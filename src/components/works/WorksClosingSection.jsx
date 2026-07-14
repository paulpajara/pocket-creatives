import React from "react";
import { InlineContactForm } from "../shared/InlineContactForm";
import { OutlineNumber } from "../shared/OutlineNumber";

function GiantThree() {
  return (
    <OutlineNumber
      number="3"
      className="pointer-events-none absolute left-[262px] top-[20px] select-none text-[800px] font-extrabold leading-none [--three-stroke:24px] max-lg:left-[59px] max-lg:top-[28px] max-lg:text-[315px] max-lg:[--three-stroke:10px] wide:left-[243px] wide:top-[-65px] wide:text-[1100px]"
      stroke="var(--three-stroke) rgba(0, 0, 0, 0.08)"
    />
  );
}

export function WorksClosingSection() {
  return (
    <section className="relative h-[882px] bg-pocket-yellow max-lg:h-auto max-lg:px-[14px] max-lg:py-[48px] wide:h-[955px]">
      <div className="relative mx-auto h-full max-w-[1920px] overflow-hidden max-lg:flex max-lg:flex-col max-lg:gap-[18px]">
        <GiantThree />

        <div className="absolute left-[108px] top-[196px] w-[636px] max-lg:static max-lg:w-full wide:left-[236px]">
          <h2 className="text-[110px] font-extrabold leading-[0.95] text-black max-lg:text-center max-lg:text-[38px] wide:text-white">
            See you
            <br />
            next time
          </h2>
          <div className="mt-[74px] w-[599px] space-y-[18px] text-[20px] font-extrabold leading-[1.05] text-black max-lg:mx-auto max-lg:mt-[14px] max-lg:w-full max-lg:space-y-[13px] max-lg:text-[14px] max-lg:leading-[0.95] wide:leading-[1.17]">
            <p>
              The truth of the matter, is that we love all this. We&apos;re here because we choose to be (and because we
              failed the GCHQ entry quiz). We&apos;ve built a team who genuinely care about delivering you the best service
              that we&apos;re able to.
            </p>
            <p>The next step in the process is seeing how we can get it even better for you next time.</p>
          </div>
        </div>

        <div className="absolute left-[789px] top-[111px] max-lg:static wide:left-[917px]">
          <h2 className="mb-[32px] w-[620px] text-[40px] font-extrabold leading-none text-black max-lg:mb-[22px] max-lg:w-full max-lg:text-[28px] max-lg:leading-[0.95] wide:mb-[37px] wide:w-[713px]">
            Ready to see what we could do with your next project?
          </h2>
          <InlineContactForm className="max-lg:hidden" />
          <InlineContactForm mobile className="lg:hidden" />
        </div>
      </div>
    </section>
  );
}
