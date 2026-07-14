import React from "react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { MediaAsset } from "../MediaAsset";
import { cn } from "../../utils/cn";

function ProcessText({ item, className }) {
  return (
    <article className={cn("w-full text-black desktop:absolute desktop:w-[315px] wide:absolute wide:w-[288px] wide:text-pocket-muted", className)}>
      <h3 className="text-[50px] font-extrabold leading-none tracking-[-1.5px]">{item.title}</h3>
      <p className="mt-12 text-[26px] font-bold leading-none tracking-[-1.15px]">{item.subtitle}</p>
      <p className="mt-[34px] text-[20px] font-medium leading-[1.05] tracking-[-0.75px]">{item.copy}</p>
    </article>
  );
}

function ProcessMedia({ item, className }) {
  return (
    <div className={cn("h-[280px] w-full overflow-hidden md:h-[430px] desktop:absolute wide:absolute", className)}>
      <MediaAsset src={item.media} alt={item.alt} className="h-full w-full object-cover" />
    </div>
  );
}

function MobileProcessSlide({ item }) {
  return (
    <article className="w-full text-black">
      <h3 className="text-[34px] font-extrabold leading-none tracking-[-1.7px]">{item.title}</h3>
      <p className="mt-[22px] text-[25px] font-medium leading-none tracking-[-1.25px]">{item.subtitle}</p>
      <p className="mt-[24px] text-[24px] font-medium leading-[1.12] tracking-[-1.2px]">{item.copy}</p>
      <div className="mt-[39px] h-[228px] w-full overflow-hidden">
        <MediaAsset src={item.media} alt={item.alt} className="h-full w-full object-cover" />
      </div>
    </article>
  );
}

export function ProcessShowcase({
  section,
  borderClasses,
  colorClasses,
  mobileHeights,
  rowPlacements,
  fallbackMobileHeightId = "video-process"
}) {
  const mobileHeight = mobileHeights[section.id] || mobileHeights[fallbackMobileHeightId];

  return (
    <section
      id={section.id}
      className={cn(
        "relative overflow-hidden border-t-[3px] bg-pocket-canvas px-0 py-0 md:px-12 lg:border-t-[6px] lg:px-6 lg:py-20 desktop:h-[2115px] desktop:px-0 desktop:py-0 wide:h-[2200px] wide:px-0 wide:py-0",
        mobileHeight,
        borderClasses[section.border]
      )}
    >
      <div className="lg:hidden">
        <h2 className="absolute left-[22px] top-[176px] w-[420px] max-w-[calc(100vw-44px)] text-[44px] font-extrabold leading-[0.96] tracking-[-2.2px] text-black">
          {section.headingPrefix} {section.headingSuffix}
        </h2>
        <div className="absolute left-[22px] top-[336px] w-[calc(100vw-22px)]">
          <CarouselTrack slidesPerView="auto" spaceBetween={34}>
            {section.items.map((item) => (
              <SwiperSlide key={item.title} className="!w-[395px] max-w-[calc(100vw-44px)]">
                <MobileProcessSlide item={item} />
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-[1920px] gap-16 lg:block desktop:h-full wide:h-full">
        <h2 className="text-[48px] font-extrabold leading-none tracking-[-2px] md:text-[64px] desktop:absolute desktop:left-[35px] desktop:top-[132px] desktop:text-[64px] desktop:tracking-[-3.2px] wide:absolute wide:left-[264px] wide:top-[145px] wide:text-[78px] wide:tracking-[-3.9px]">
          <span className={cn(colorClasses[section.prefixColor], "desktop:text-black")}>{section.headingPrefix}</span>{" "}
          <span className={cn(colorClasses[section.suffixColor], "desktop:text-black")}>{section.headingSuffix}</span>
        </h2>

        <div className="grid gap-16 desktop:block wide:block">
          {section.items.map((item, index) => {
            const placement = rowPlacements[index];
            const text = <ProcessText item={item} className={placement.text} />;
            const media = <ProcessMedia item={item} className={placement.media} />;

            return (
              <div key={item.title} className="grid gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:items-center desktop:block wide:block">
                {index === 1 ? (
                  <>
                    <div className="md:order-2">{text}</div>
                    <div className="md:order-1">{media}</div>
                  </>
                ) : (
                  <>
                    {text}
                    {media}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
