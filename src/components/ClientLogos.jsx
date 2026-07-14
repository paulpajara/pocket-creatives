import React from "react";
import { ClientLogoCarousel } from "./ClientLogoCarousel";

export function ClientLogos() {
  return (
    <section id="about" className="bg-pocket-canvas py-20 max-lg:h-[850px] max-lg:py-0 lg:h-[582px] lg:py-0 wide:h-[572px]">
      <div className="relative mx-auto h-full w-[430px] max-w-full lg:hidden">
        <p className="absolute left-[21px] top-[9px] w-[389px] break-words text-[30px] font-medium leading-[1.5] tracking-[-1.5px] text-pocket-muted">
          As you can see, we&apos;ve{" "}
          <span className="font-extrabold text-pocket-yellow">partnered</span> with a lot of amazing people
        </p>
        <h2 className="absolute left-[21px] top-[184px] w-[389px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-pocket-blue">
          in many different Industries:
        </h2>
        <p className="absolute left-5 top-[235px] w-[390px] text-[20px] font-medium leading-[1.5] tracking-[-1px] text-pocket-muted">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
          consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
          Enim.
        </p>
        <div className="absolute left-5 top-[470px] w-[390px] max-w-[calc(100vw-40px)] overflow-hidden">
          <ClientLogoCarousel
            heightClassName="h-[330px]"
            gridClassName="gap-3"
            cardClassName="h-[98px] rounded-xl p-4 shadow-[0_4px_4px_rgba(0,0,0,0.16)]"
            imageClassName="max-h-[70px]"
          />
        </div>
      </div>

      <div className="section-shell hidden gap-10 lg:grid lg:grid-cols-[632px_640px] lg:gap-[94px] lg:pt-[80px]">
        <div className="min-w-0">
          <p className="max-w-[610px] break-words text-3xl font-medium leading-none tracking-[-2px] text-pocket-muted sm:text-[40px] lg:leading-none">
            As you can see, we've{" "}
            <span className="font-black text-pocket-blue wide:text-pocket-yellow">partnered</span> with a lot of amazing people
          </p>
          <h2 className="mt-[30px] text-3xl font-extrabold leading-none tracking-[-2px] sm:text-[40px] wide:text-pocket-blue">
            in many different Industries:
          </h2>
          <p className="mt-[30px] max-w-[632px] text-lg font-medium leading-[2] tracking-[-1px] text-pocket-muted sm:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
            consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
            Enim.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <ClientLogoCarousel className="mx-auto max-w-[640px]" />
        </div>
      </div>
    </section>
  );
}
