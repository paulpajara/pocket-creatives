import React from "react";

export function QualitySection() {
  return (
    <section id="services" className="relative bg-pocket-blue py-24 max-lg:h-[765px] max-lg:py-0 sm:py-32 lg:h-[1000px] lg:py-[280px]">
      <div className="relative mx-auto h-full w-[430px] max-w-full lg:hidden">
        <h2 className="absolute left-[26px] top-[111px] w-[382px] text-[60px] font-extrabold leading-[0.98] tracking-[-3px] text-white">
          We <span className="text-pocket-yellow">squeeze</span> quality into every pixel...
        </h2>
        <p className="absolute left-[26px] top-[327px] w-[382px] text-[20px] font-medium leading-[1.6] tracking-[-1px] text-pocket-ink">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
          consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
          Enim.
        </p>
        <p className="absolute left-[26px] top-[540px] w-[382px] text-[28px] font-extrabold leading-none tracking-[-1.4px] text-white">
          See some of our Photography work for different industries below.
        </p>
      </div>

      <div className="section-shell hidden lg:block">
        <h2 className="max-w-[1440px] text-5xl font-extrabold leading-none tracking-[-6px] text-white sm:text-6xl lg:text-[120px]">
          We <span className="text-pocket-yellow">squeeze</span> quality into every pixel...
        </h2>
        <div className="mt-20 grid gap-8 lg:grid-cols-[610px_593px] lg:gap-20">
          <p className="max-w-[610px] text-[20px] font-medium leading-[2] tracking-[-1px] text-pocket-ink">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
            consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
            Enim.
          </p>
          <p className="max-w-[593px] text-[40px] font-extrabold leading-none tracking-[-2px] text-white">
            See some of our photography work for different industries below.
          </p>
        </div>
      </div>
    </section>
  );
}
