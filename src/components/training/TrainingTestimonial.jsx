import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { trainingTestimonials } from "../../data/trainingContent";

function BrandMark({ testimonial }) {
  const shared = "flex h-[300px] w-[300px] shrink-0 items-center justify-center bg-white text-center text-black mobile:mx-auto mobile:h-[152px] mobile:w-[152px]";

  if (testimonial.brandKey === "telegraph") {
    return (
      <div className={shared}>
        <img src="/figma/client-09.png" alt="The Telegraph" className="max-h-[82%] max-w-[86%] object-contain" />
      </div>
    );
  }

  if (testimonial.brandKey === "romilly") {
    return <div className={`${shared} whitespace-pre-line text-[38px] font-light leading-[1.25] tracking-[0.18em] mobile:text-[24px]`}>ROMILLY{"\n"}WILDE</div>;
  }

  if (testimonial.brandKey === "realme") {
    return <div className={`${shared} bg-pocket-yellow text-[54px] font-light tracking-[-2px] mobile:text-[35px]`}>realme</div>;
  }

  if (testimonial.brandKey === "pawpaw") {
    return (
      <div className={`${shared} flex-col font-extrabold`}>
        <span className="text-[54px] italic leading-none mobile:text-[34px]">Dr.</span>
        <span className="text-[42px] leading-none mobile:text-[28px]">PAWPAW</span>
      </div>
    );
  }

  return (
    <div className={`${shared} flex-col px-5`} aria-label="River Group Content Innovation">
      <p className="text-[52px] font-extrabold leading-[0.72] mobile:text-[34px]">RIVER</p>
      <p className="ml-[55px] text-[43px] font-light leading-[0.85] mobile:ml-0 mobile:text-[29px]">GROUP</p>
      <p className="mt-4 text-[12px] font-medium tracking-[0.04em] text-neutral-500 mobile:text-[8px]">CONTENT INNOVATION</p>
    </div>
  );
}

function QuoteText({ text }) {
  const pieces = text.split("Pocket Creatives");

  return (
    <>
      {pieces.map((piece, index) => (
        <React.Fragment key={`${piece}-${index}`}>
          {index > 0 && <strong className="font-extrabold text-pocket-blue">Pocket Creatives</strong>}
          {piece}
        </React.Fragment>
      ))}
    </>
  );
}

export function TrainingTestimonial() {
  const riverGroupIndex = trainingTestimonials.findIndex(({ brandKey }) => brandKey === "river");

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-pocket-canvas py-24 wide:min-h-[916px] mobile:min-h-[744px] mobile:items-start mobile:border-t-[3px] mobile:border-pocket-yellow mobile:py-[60px]">
      <div className="pointer-events-none absolute left-[11%] top-[118px] text-[300px] font-light leading-none text-black/[0.08] mobile:left-[30px] mobile:top-[38px] mobile:text-[165px]">{"\u201c"}</div>
      <div className="pointer-events-none absolute bottom-[58px] right-[10%] rotate-180 text-[300px] font-light leading-none text-black/[0.08] mobile:bottom-[22px] mobile:right-[22px] mobile:text-[165px]">{"\u201c"}</div>

      <CarouselTrack
        modules={[Autoplay, EffectFade]}
        freeMode={false}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        slidesPerView={1}
        initialSlide={riverGroupIndex}
        autoHeight
        overflowVisible={false}
        grabCursor={false}
        allowTouchMove={false}
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="relative z-10 w-full !overflow-hidden"
      >
        {trainingTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.brandKey}>
            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[300px_minmax(0,1fr)] items-center gap-16 px-8 wide:px-0 mobile:block mobile:px-[22px]">
              <BrandMark testimonial={testimonial} />
              <div className="relative mobile:mt-[28px]">
                <p className="text-[21px] font-medium leading-[1.32] text-black wide:text-[23px] mobile:text-[22px] mobile:leading-[1.31]">
                  <QuoteText text={testimonial.quote} />
                </p>
                <p className="mt-10 flex justify-end mobile:mt-[18px] mobile:justify-end">
                  <span className="relative z-10 inline bg-[linear-gradient(transparent_60%,#fcbe17_60%)] px-2 text-[30px] font-extrabold leading-[1.05] text-black before:hidden wide:text-[36px] mobile:whitespace-nowrap mobile:bg-none mobile:px-0 mobile:text-[clamp(20px,6.4vw,29px)] mobile:before:absolute mobile:before:bottom-0 mobile:before:-left-11 mobile:before:right-0 mobile:before:-z-10 mobile:before:block mobile:before:h-[14px] mobile:before:bg-pocket-yellow">
                    {testimonial.attribution}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CarouselTrack>

      <div className="absolute right-[9%] top-[85px] z-20 flex h-[160px] w-[160px] rotate-6 items-center justify-center rounded-full bg-pocket-blue text-center text-[26px] font-extrabold leading-[0.95] text-white shadow-button wide:h-[190px] wide:w-[190px] wide:text-[30px] mobile:hidden">
        What
        <br />
        They Say
      </div>
    </section>
  );
}
