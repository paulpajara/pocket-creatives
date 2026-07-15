import React, { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { worksPortfolioPage } from "../../data/siteContent";
import { cn } from "../../utils/cn";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { PortfolioLightbox } from "./PortfolioLightbox";

function CategoryNav() {
  return (
    <nav className="mt-8 overflow-x-auto px-5 pb-2 lg:mx-auto lg:max-w-[1280px] lg:overflow-visible lg:px-8" aria-label="Portfolio categories">
      <div className="mx-auto flex w-max items-center gap-x-6 text-[14px] font-extrabold leading-none text-pocket-muted lg:w-auto lg:flex-wrap lg:justify-center lg:gap-y-4">
        {worksPortfolioPage.categories.map((category) => {
          const isActive = category === "Beauty";

          return (
            <a
              key={category}
              href="#beauty"
              className={cn(
                "whitespace-nowrap py-2 transition-colors duration-200 hover:text-pocket-yellow focus-visible:text-pocket-yellow",
                isActive && "text-pocket-yellow"
              )}
            >
              {category}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function PortfolioMedia({ item, className, controls = false, eager = false }) {
  const mediaRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager || !item.video);

  useEffect(() => {
    if (shouldLoad || !item.video || !mediaRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "360px 0px" }
    );

    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, [item.video, shouldLoad]);

  if (item.video) {
    return (
      <video
        ref={mediaRef}
        src={shouldLoad ? item.video : undefined}
        aria-label={item.alt}
        className={cn("h-full w-full object-cover", className)}
        autoPlay={shouldLoad && !controls}
        controls={controls}
        muted={!controls}
        loop={!controls}
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
      />
    );
  }

  return <img src={item.image} alt={item.alt} className={cn("h-full w-full object-cover", className)} decoding="async" />;
}

function WorkCard({ item }) {
  return (
    <article className="w-full">
      <div className="h-[330px] w-full overflow-hidden bg-pocket-yellow sm:h-[390px] xl:h-[450px]">
        <PortfolioMedia item={item} />
      </div>
      <div className="mt-3 flex items-center justify-between gap-4 text-[13px] font-bold leading-none text-pocket-muted sm:text-[14px]">
        <span>{item.eyebrow}</span>
        <span className="shrink-0">{item.type}</span>
      </div>
    </article>
  );
}

function FeaturedReel({ onSwiper }) {
  const featuredItems = Array.from({ length: 3 }, () => worksPortfolioPage.featured).flat();

  return (
    <div className="mt-9 h-[390px] overflow-hidden sm:mt-12 sm:h-[460px] xl:mt-[54px] xl:h-[500px]">
      <CarouselTrack
        modules={[Autoplay]}
        className="works-featured-swiper h-full"
        overflowVisible={false}
        freeMode={false}
        loop
        centeredSlides
        speed={900}
        autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: false }}
        spaceBetween={24}
        breakpoints={{
          640: { spaceBetween: 40 },
          1024: { spaceBetween: 58 },
          1440: { spaceBetween: 80 }
        }}
        onSwiper={onSwiper}
      >
        {featuredItems.map((item, index) => (
          <SwiperSlide
            key={`${item.title}-${index}`}
            className="!w-[78vw] !max-w-[360px] sm:!w-[62vw] lg:!w-auto lg:!max-w-none"
            style={{ "--works-slide-width": `${item.width}px` }}
          >
            <WorkCard item={item} />
          </SwiperSlide>
        ))}
      </CarouselTrack>
    </div>
  );
}

function WorksHero() {
  const [swiper, setSwiperInstance] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!swiper?.autoplay || swiper.destroyed) return;

    if (paused) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [paused, swiper]);

  const setSwiper = useCallback((swiperInstance) => {
    setSwiperInstance(swiperInstance);
  }, []);

  return (
    <section className="overflow-hidden bg-pocket-canvas pb-10 pt-[132px] sm:pt-[142px] lg:pb-[52px] lg:pt-[154px]">
      <div className="mx-auto max-w-[1920px]">
        <h1 className="text-center text-[30px] font-extrabold leading-none text-pocket-blue sm:text-[32px]">
          View By Category
        </h1>
        <CategoryNav />
        <FeaturedReel onSwiper={setSwiper} />

        <div id="beauty" className="mx-auto mt-6 flex max-w-[1368px] items-center justify-between px-6 sm:mt-8 sm:px-9 xl:mt-10 xl:px-0">
          <h2 className="text-[50px] font-extrabold leading-none text-pocket-blue sm:text-[64px] xl:text-[72px]">BEAUTY</h2>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition-colors hover:bg-pocket-blue hover:text-white sm:h-10 sm:w-10"
            aria-label={paused ? "Play works carousel" : "Pause works carousel"}
            aria-pressed={paused}
          >
            {paused ? <Play className="h-5 w-5 fill-current" /> : <Pause className="h-5 w-5 fill-current" />}
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoryIntro() {
  const { categoryIntro } = worksPortfolioPage;

  return (
    <section className="min-h-[780px] bg-pocket-yellow py-24 sm:min-h-[820px] sm:py-32 xl:min-h-[858px] xl:py-[166px]">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,690px)_240px] lg:gap-20 xl:gap-[210px] xl:px-0">
        <div>
          <h2 className="max-w-[720px] text-[56px] font-extrabold leading-[0.96] tracking-normal text-white sm:text-[76px] xl:text-[96px]">
            {categoryIntro.title}
          </h2>
          <p className="mt-12 max-w-[640px] text-[18px] font-bold leading-[1.55] tracking-normal text-black sm:mt-16 sm:text-[20px] lg:text-[16px] xl:mt-[74px]">
            {categoryIntro.copy}
          </p>
        </div>

        <div className="lg:pt-[218px] xl:pt-[236px]">
          <p className="text-[18px] font-extrabold leading-none tracking-normal text-black">Go to...</p>
          <div className="mt-5 space-y-4">
            {categoryIntro.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 text-[18px] font-extrabold leading-none tracking-normal text-white transition-colors hover:text-pocket-blue"
              >
                <ArrowRight className="h-5 w-5 shrink-0 text-black transition-transform group-hover:translate-x-1" />
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
      onClick={onOpen}
      className="group block w-full text-left focus-visible:outline-pocket-blue"
    >
      <span
        className={cn(
          "block overflow-hidden bg-white",
          ratio === "video" ? "aspect-video" : "aspect-[1.28/1]"
        )}
      >
        <PortfolioMedia item={item} className="transition-transform duration-500 group-hover:scale-[1.035]" />
      </span>
      <span className="mt-3 block text-[15px] font-extrabold leading-tight tracking-normal text-pocket-muted sm:text-[14px]">
        {item.title}
      </span>
    </button>
  );
}

function VideoGrid({ onOpen }) {
  return (
    <section id="beauty-videography" className="bg-pocket-canvas pb-24 pt-24 sm:pb-28 sm:pt-32 xl:pb-[120px] xl:pt-[154px]">
      <div className="mx-auto max-w-[1368px] px-6 sm:px-9 xl:px-0">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-[40px] font-extrabold leading-none tracking-normal text-pocket-blue sm:text-[36px]">Beauty Videography</h2>
          <p className="text-[12px] font-bold leading-none text-pocket-muted sm:mt-3">*Click on Video to play in large view</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {worksPortfolioPage.videoItems.map((item, index) => (
            <MediaTile
              key={`${item.title}-${index}`}
              item={item}
              ratio="video"
              onOpen={() => onOpen("video", worksPortfolioPage.videoItems, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotographyGrid({ onOpen }) {
  return (
    <section id="beauty-photography" className="bg-pocket-canvas pb-28 pt-8 sm:pb-36 sm:pt-12 xl:pb-[162px] xl:pt-[34px]">
      <div className="mx-auto max-w-[1368px] px-6 sm:px-9 xl:px-0">
        <h2 className="flex items-center gap-4 text-[54px] font-extrabold leading-none tracking-normal text-pocket-yellow sm:gap-7 sm:text-[72px] xl:text-[88px]">
          Photography <ArrowDown className="mt-2 h-11 w-11 stroke-[2.6] sm:h-14 sm:w-14 xl:h-16 xl:w-16" />
        </h2>

        <div className="mt-20 sm:mt-28 xl:mt-[144px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-[38px] font-extrabold leading-none tracking-normal text-pocket-blue sm:text-[36px]">Beauty Photography</h3>
            <p className="text-[12px] font-bold leading-none text-pocket-muted sm:mt-3">*Click on thumbnail for large view</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
            {worksPortfolioPage.photoItems.map((item, index) => (
              <MediaTile
                key={`${item.title}-${index}`}
                item={item}
                ratio="photo"
                onOpen={() => onOpen("photography", worksPortfolioPage.photoItems, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorksPortfolioPage() {
  const [previewGallery, setPreviewGallery] = useState(null);
  const openPreview = useCallback((kind, items, index) => {
    setPreviewGallery({ kind, items, index });
  }, []);
  const closePreview = useCallback(() => setPreviewGallery(null), []);

  return (
    <>
      <main id="works-page" className="bg-pocket-canvas">
        <WorksHero />
        <CategoryIntro />
        <VideoGrid onOpen={openPreview} />
        <PhotographyGrid onOpen={openPreview} />
      </main>

      <PortfolioLightbox gallery={previewGallery} onClose={closePreview} />
    </>
  );
}
