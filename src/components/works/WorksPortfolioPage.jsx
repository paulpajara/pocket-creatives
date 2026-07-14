import React, { useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play, X } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { worksPortfolioPage } from "../../data/siteContent";
import { cn } from "../../utils/cn";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";

function CategoryNav() {
  return (
    <nav className="mx-auto mt-[36px] flex max-w-[1280px] flex-wrap items-center justify-center gap-x-[24px] gap-y-4 text-[14px] font-extrabold leading-none text-pocket-muted">
      {worksPortfolioPage.categories.map((category) => {
        const isActive = category === "Beauty";

        return (
          <a
            key={category}
            href={isActive ? "#beauty" : "#beauty"}
            className={cn(
              "transition-colors duration-200 hover:text-pocket-yellow focus-visible:text-pocket-yellow",
              isActive && "text-pocket-yellow"
            )}
          >
            {category}
          </a>
        );
      })}
    </nav>
  );
}

function WorkCard({ item }) {
  return (
    <article className="w-full">
      <div className="h-[450px] w-full overflow-hidden bg-pocket-yellow">
        {item.fill === "yellow" ? (
          <div className="h-full w-full bg-pocket-yellow" aria-label={item.alt} />
        ) : (
          <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="mt-[10px] flex items-center justify-between text-[14px] font-bold leading-none text-pocket-muted">
        <span>{item.eyebrow}</span>
        <span>{item.type}</span>
      </div>
    </article>
  );
}

function FeaturedReel() {
  return (
    <div className="mt-[54px] h-[500px] overflow-hidden">
      <div className="ml-[-200px] w-[calc(100%+400px)]">
        <CarouselTrack
          className="works-featured-swiper !overflow-visible"
          freeMode={false}
          loop
          speed={900}
          modules={[Autoplay]}
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          spaceBetween={80}
        >
          {worksPortfolioPage.featured.map((item, index) => (
            <SwiperSlide
              key={`${item.title}-${index}`}
              style={{ width: `${item.width}px` }}
            >
              <WorkCard item={item} />
            </SwiperSlide>
          ))}
        </CarouselTrack>
      </div>
    </div>
  );
}

function BeautyHeading() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="beauty" className="bg-pocket-canvas pb-[58px] pt-[4px]">
      <div className="mx-auto flex max-w-[1368px] items-center justify-between px-0">
        <h2 className="text-[72px] font-extrabold leading-none tracking-[-3.6px] text-pocket-blue">BEAUTY</h2>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="mr-[8px] inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition hover:bg-pocket-blue hover:text-white"
          aria-label={paused ? "Play beauty reel" : "Pause beauty reel"}
        >
          {paused ? <Play className="h-4 w-4 fill-current" /> : <Pause className="h-4 w-4 fill-current" />}
        </button>
      </div>
    </section>
  );
}

function CategoryIntro() {
  const { categoryIntro } = worksPortfolioPage;

  return (
    <section className="min-h-[858px] bg-pocket-yellow py-[166px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[690px_240px] gap-[210px]">
        <div>
          <h2 className="text-[96px] font-extrabold leading-[0.96] tracking-[-4.8px] text-white">
            {categoryIntro.title}
          </h2>
          <p className="mt-[74px] max-w-[640px] text-[16px] font-bold leading-[1.65] tracking-[-0.4px] text-black">
            {categoryIntro.copy}
          </p>
        </div>

        <div className="pt-[236px]">
          <p className="text-[16px] font-extrabold leading-none tracking-[-0.4px] text-black">Go to...</p>
          <div className="mt-[18px] space-y-[14px]">
            {categoryIntro.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-[12px] text-[16px] font-extrabold leading-none tracking-[-0.4px] text-white transition hover:text-pocket-blue"
              >
                <ArrowRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaTile({ item, ratio = "video", onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group block w-full text-left focus-visible:outline-pocket-blue"
    >
      <span className="mb-[8px] block text-[14px] font-extrabold leading-none tracking-[-0.35px] text-pocket-muted">
        {item.title}
      </span>
      <span
        className={cn(
          "block overflow-hidden bg-white",
          ratio === "video" ? "aspect-video" : "aspect-[1.28/1]"
        )}
      >
        <img
          src={item.image}
          alt={item.alt}
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </span>
    </button>
  );
}

function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-8" role="dialog" aria-modal="true">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-8 top-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-pocket-yellow"
        aria-label="Close preview"
      >
        <X className="h-7 w-7" />
      </button>
      <img src={item.image} alt={item.alt} className="max-h-[82vh] max-w-[82vw] object-contain shadow-soft" />
    </div>
  );
}

function VideoGrid({ onOpen }) {
  return (
    <section id="beauty-videography" className="bg-pocket-canvas pb-[120px] pt-[154px]">
      <div className="mx-auto max-w-[1368px]">
        <div className="flex items-start justify-between">
          <h2 className="text-[36px] font-extrabold leading-none tracking-[-1.8px] text-pocket-blue">Beauty Videography</h2>
          <p className="mt-[12px] text-[12px] font-bold leading-none text-pocket-muted">*Click on Video to play in large view</p>
        </div>
        <div className="mt-[28px] grid grid-cols-4 gap-x-[24px] gap-y-[34px]">
          {worksPortfolioPage.videoItems.map((item) => (
            <MediaTile key={item.title} item={item} ratio="video" onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotographyGrid({ onOpen }) {
  return (
    <section id="beauty-photography" className="bg-pocket-canvas pb-[162px] pt-[34px]">
      <div className="mx-auto max-w-[1368px]">
        <h2 className="flex items-center gap-[28px] text-[88px] font-extrabold leading-none tracking-[-4.4px] text-pocket-yellow">
          Photography <ArrowDown className="mt-[14px] h-[64px] w-[64px] stroke-[2.6]" />
        </h2>

        <div className="mt-[144px]">
          <div className="flex items-start justify-between">
            <h3 className="text-[36px] font-extrabold leading-none tracking-[-1.8px] text-pocket-blue">Beauty Photography</h3>
            <p className="mt-[12px] text-[12px] font-bold leading-none text-pocket-muted">
              *Click on thumbnail for large view
            </p>
          </div>
          <div className="mt-[32px] grid grid-cols-6 gap-x-[20px] gap-y-[30px]">
            {worksPortfolioPage.photoItems.map((item) => (
              <MediaTile key={item.title} item={item} ratio="photo" onOpen={onOpen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorksPortfolioPage() {
  const [previewItem, setPreviewItem] = useState(null);

  return (
    <>
      <main id="works-page" className="bg-pocket-canvas">
        <section className="overflow-hidden bg-pocket-canvas pb-[52px] pt-[154px]">
          <div className="mx-auto max-w-[1920px]">
            <h1 className="text-center text-[32px] font-extrabold leading-none tracking-[-1.6px] text-pocket-blue">
              View By Category
            </h1>
            <CategoryNav />
            <FeaturedReel />
          </div>
        </section>

        <BeautyHeading />
        <CategoryIntro />
        <VideoGrid onOpen={setPreviewItem} />
        <PhotographyGrid onOpen={setPreviewItem} />
      </main>

      <Lightbox item={previewItem} onClose={() => setPreviewItem(null)} />
    </>
  );
}
