import React from "react";
import { asset, photoCategories } from "../data/siteContent";
import { StickerButton } from "./StickerButton";
import { cn } from "../utils/cn";

function PhotoCategoryCard({ category, mobile = false, featuredOnWide = false }) {
  const hoverLabel = `View ${category}`;

  if (mobile) {
    return (
      <button
        type="button"
        className="group relative block h-[62px] w-[390px] max-w-[calc(100vw-40px)] text-left"
      >
        <span className="absolute left-0 top-0 block whitespace-nowrap text-[30px] font-extrabold leading-none tracking-[-1.5px] text-pocket-muted transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
          {category}
        </span>
        <span className="absolute left-0 top-0 block whitespace-nowrap text-[30px] font-extrabold leading-none tracking-[-1.5px] text-pocket-yellow opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          {hoverLabel}
        </span>
        <span className="absolute left-0 top-[46px] h-px w-full bg-pocket-muted/70" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="group relative block h-[72px] w-[362px] overflow-visible text-left"
    >
      <span
        className={cn(
          "absolute left-0 top-0 block whitespace-nowrap text-[40px] font-extrabold leading-none tracking-[-2px] text-black transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0 wide:text-pocket-muted",
          featuredOnWide && "wide:opacity-0"
        )}
      >
        {category}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 block whitespace-nowrap text-[40px] font-extrabold leading-none tracking-[-2px] text-pocket-yellow opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
          featuredOnWide && "wide:opacity-100"
        )}
      >
        {hoverLabel}
      </span>
      <span className="absolute left-0 top-[56px] h-px w-full bg-black wide:bg-pocket-muted/50" aria-hidden="true" />
    </button>
  );
}

export function PhotographySection({ onContactClick }) {
  return (
    <section className="relative bg-pocket-canvas max-lg:h-[1165px] lg:h-[1020px] wide:h-[988px] wide:border-t-[4px] wide:border-pocket-blue">
      <div className="relative mx-auto h-full w-[430px] max-w-full lg:hidden">
        <img src={asset("icon-shutter.svg")} alt="" className="absolute left-5 top-10 h-[60px] w-[60px]" />
        <h2 className="absolute left-5 top-[120px] text-[40px] font-medium leading-none tracking-[-2px] text-pocket-muted">
          Photography
        </h2>
        <img
          src={asset("photo-service.png")}
          alt="Beauty photography example"
          className="absolute left-5 top-[227px] h-[260px] w-[390px] max-w-[calc(100vw-40px)] object-cover"
        />
        <div className="absolute left-5 top-[527px] w-[390px] max-w-[calc(100vw-40px)]">
          {photoCategories.map((category) => (
            <PhotoCategoryCard
              key={category}
              category={category}
              mobile
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1440px] lg:block">
        <img src={asset("icon-shutter.svg")} alt="" className="absolute left-[37px] top-[160px] h-[60px] w-[60px]" />
        <h2 className="absolute left-[123px] top-[175px] text-[40px] font-medium leading-none tracking-[-2px] text-black wide:text-pocket-muted">
          Photography
        </h2>
        <div className="absolute left-[1240px] top-[135px] wide:hidden">
          <StickerButton onClick={onContactClick} icon />
        </div>
        <StickerButton
          onClick={onContactClick}
          className="absolute left-[1495px] top-[72px] hidden h-[150px] w-[150px] !text-[30px] shadow-[3px_3px_5px_rgba(82,110,135,0.8)] wide:inline-flex"
        />

        <div className="absolute left-[37px] top-[369px] w-[362px] wide:top-[319px]">
          {photoCategories.map((category, index) => (
            <PhotoCategoryCard
              key={category}
              category={category}
              featuredOnWide={index === 0}
            />
          ))}
        </div>
        <img
          src={asset("photo-service.png")}
          alt="Beauty photography example"
          className="absolute left-[533px] top-[327px] h-[605px] w-[1147px] max-w-none object-cover wide:top-[295px]"
        />
      </div>
    </section>
  );
}
