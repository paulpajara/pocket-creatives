import React from "react";
import { ChevronDown } from "lucide-react";

export function TakeALookSection() {
  return (
    <section className="relative bg-pocket-yellow py-24 max-lg:h-[747px] max-lg:py-0 sm:py-32 lg:h-[895px] lg:py-0 wide:h-[1001px] wide:py-0">
      <div className="relative hidden h-full w-full lg:block wide:hidden">
        <h2 className="absolute left-[8vw] top-[214px] w-[84vw] text-[clamp(118px,8.45vw,122px)] font-extrabold leading-[0.99] tracking-[-4px] text-white">
          Take a look at some of our video work...
        </h2>
        <p className="absolute left-[8vw] top-[520px] w-[610px] text-[20px] font-medium leading-[2.1] tracking-[-1px] text-pocket-ink">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur
          placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
        </p>
        <ChevronDown className="absolute left-[51.5vw] top-[460px] h-[400px] w-[400px] text-white stroke-[2.5]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <h2 className="absolute left-[360px] top-[292px] w-[1180px] text-[124px] font-extrabold leading-[0.99] tracking-[-4px] text-white">
          Take a look at some
          <br />
          of our video work...
        </h2>
        <p className="absolute left-[360px] top-[604px] w-[610px] text-[20px] font-medium leading-[2.1] tracking-[-1px] text-pocket-ink">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
          <br />
          quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
          <br />
          In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
        </p>
        <ChevronDown className="absolute left-[1088px] top-[591px] h-[178px] w-[244px] text-white stroke-[2.5]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto h-full w-[430px] max-w-full lg:hidden">
        <h2 className="absolute left-5 top-[102px] w-[390px] text-[60px] font-extrabold leading-[0.95] tracking-[-3px] text-white">
          Take a look at some of our video work...
        </h2>
        <p className="absolute left-5 top-[319px] w-[390px] text-[20px] font-medium leading-[1.6] tracking-[-1px] text-pocket-ink">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur
          placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
        </p>
        <ChevronDown className="absolute left-[98px] top-[528px] h-[160px] w-[234px] text-white stroke-[2.7]" aria-hidden="true" />
      </div>
    </section>
  );
}
