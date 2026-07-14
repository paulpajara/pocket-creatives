import React from "react";
import { Autoplay } from "swiper/modules";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { MediaAsset } from "../MediaAsset";
import { aboutWorkCards, asset } from "../../data/siteContent";

function WorkCard({ item }) {
  return (
    <article
      className="about-work-card relative h-[830px] w-[720px] overflow-hidden bg-pocket-yellow shadow-soft desktop:h-[740px] mobile:h-[430px] mobile:w-[216px]"
    >
      <MediaAsset src={item.media} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-pocket-yellow via-pocket-yellow/70 to-white/5" />
      <div className="absolute bottom-[37px] left-[31px] right-[31px] mobile:bottom-[26px] mobile:left-[18px] mobile:right-[18px]">
        <p className="inline-flex bg-pocket-blue px-[7px] py-[3px] text-[11px] font-extrabold leading-none text-white mobile:text-[10px]">
          {item.title}
        </p>
        <p className="mt-[13px] text-[15px] font-extrabold leading-[1.08] mobile:mt-[10px] mobile:text-[13px]">
          {item.category}
        </p>
        <p className="mt-[12px] text-[16px] font-medium leading-[1.05] tracking-[-0.7px] mobile:mt-[10px] mobile:text-[13px] mobile:tracking-[-0.45px]">
          {item.copy}
        </p>
      </div>
    </article>
  );
}

const articleItems = [
  {
    title: (
      <>
        We&apos;re a <span className="text-pocket-blue">video production</span>
        <br />
        company
      </>
    ),
    copy: [
      "As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media.",
      "What are you looking for in a video production company? If it's a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you."
    ],
    image: asset("works/works-camera-shoot.png"),
    alt: "Pocket Creatives filming a studio production"
  },
  {
    title: (
      <>
        and a <span className="text-pocket-yellow">photography company too...</span>
      </>
    ),
    copy: [
      "As a photography company, we're able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention.",
      "As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all."
    ],
    image: asset("works/works-meeting.png"),
    alt: "Pocket Creatives preparing a food photography setup"
  }
];

function AboutArticleSlide({ item }) {
  return (
    <article className="w-full text-black">
      <h3 className="text-[32px] font-extrabold leading-[0.95] tracking-[-1.6px]">{item.title}</h3>
      <div className="mt-6 space-y-5 text-[14px] font-medium leading-[1.1] tracking-[-0.5px]">
        {item.copy.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <img src={item.image} alt={item.alt} className="mt-8 h-[210px] w-full object-cover" />
    </article>
  );
}

export function AboutWorksSection() {
  const carouselItems = Array.from({ length: 4 }, () => aboutWorkCards).flat();
  const articleCarouselItems = Array.from({ length: 4 }, () => articleItems).flat();

  return (
    <section className="relative h-[2350px] bg-pocket-canvas desktop:h-[2250px] mobile:h-auto mobile:py-[72px]">
      <div className="relative mx-auto h-full max-w-[1920px] mobile:flex mobile:h-auto mobile:flex-col mobile:px-6">
        <h2 className="absolute left-[449px] top-[106px] w-[1023px] text-center text-[80px] font-extrabold leading-none tracking-[-4px] text-pocket-blue desktop:left-1/2 desktop:top-[106px] desktop:w-[720px] desktop:-translate-x-1/2 desktop:text-[78px] desktop:tracking-[-3.9px] desktop:text-black mobile:static mobile:w-full mobile:text-center mobile:text-[42px] mobile:tracking-[-2.1px] mobile:text-black">
          Our Works
        </h2>

        <div className="absolute left-1/2 top-[242px] w-[1280px] -translate-x-1/2 desktop:top-[232px] desktop:w-[1280px] mobile:static mobile:mt-[26px] mobile:w-full mobile:translate-x-0 mobile:overflow-visible">
          <CarouselTrack
            modules={[Autoplay]}
            freeMode={false}
            loop
            overflowVisible={false}
            initialSlide={1}
            centeredSlides={false}
            autoplay={{ delay: 2700, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: false }}
            speed={720}
            slidesPerView={3}
            spaceBetween={42}
            observer
            observeParents
            watchSlidesProgress
            onAutoplayStop={(swiperInstance) => swiperInstance?.autoplay?.start()}
            breakpoints={{
              0: {
                centeredSlides: false,
                slidesPerView: "auto",
                spaceBetween: 16
              },
              1024: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 42
              }
            }}
            className="about-works-swiper h-[950px] !overflow-hidden mobile:h-[454px] mobile:!overflow-visible"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide
                key={`${item.title}-${index}`}
                className="!flex !items-center !justify-center mobile:!w-[216px] mobile:!justify-start"
              >
                <WorkCard item={item} />
              </SwiperSlide>
            ))}
          </CarouselTrack>
          
        </div>

        <div className="hidden mobile:mt-[48px] mobile:block mobile:w-full mobile:overflow-visible">
          <CarouselTrack slidesPerView="auto" spaceBetween={28} loop overflowVisible className="!overflow-visible">
            {articleCarouselItems.map((item, index) => (
              <SwiperSlide key={`${item.alt}-${index}`} className="mobile:!w-[calc(100vw-84px)]">
                <AboutArticleSlide item={item} />
              </SwiperSlide>
            ))}
          </CarouselTrack>
        </div>

        <div className="absolute left-[238px] top-[1250px] w-[646px] desktop:left-[100px] mobile:hidden">
          <h3 className="text-[45px] font-medium leading-[0.95] tracking-[-1.9px] text-pocket-muted desktop:text-[45px] desktop:font-medium desktop:leading-[0.98] desktop:tracking-[-1.6px] desktop:text-pocket-muted mobile:text-[32px] mobile:font-extrabold mobile:tracking-[-1.6px] mobile:text-black">
            We&apos;re a <span className="font-extrabold text-pocket-blue">video production</span>
            <br />
            company
          </h3>
          <div className="mt-[59px] w-[800px] space-y-[24px] text-[20px] font-medium leading-[1.12] tracking-[-0.8px] text-pocket-muted desktop:mt-[57px] desktop:w-[760px] desktop:text-[20px] desktop:leading-[1.13] desktop:tracking-[-0.6px] desktop:text-pocket-muted mobile:mt-8 mobile:w-full mobile:text-[18px] mobile:leading-[1.17] mobile:tracking-[-0.8px] mobile:text-black">
            <p>
              As a video production company, we deliver high quality and engaging content for commercial, corporate, and
              promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and
              video content for social media. Our professional video team knows how to craft the right elements together 
              to convey your messages and tell your story.
            </p>
            <p>
              What are you looking for in a video production company? If it&apos;s a creative team who are trustworthy,
              knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.
            </p>
          </div>
        </div>

        <img
          src={asset("bts-video.png")}
          alt="Pocket Creatives filming a studio production"
          className="absolute right-[0px] top-[1230px] h-[555px] w-[700px] object-cover desktop:top-[1230px] desktop:h-[350px] desktop:w-[500px] mobile:hidden"
        />

        <img
          src={asset("works/works-meeting.png")}
          alt="Pocket Creatives preparing a food photography setup"
          className="absolute left-0 top-[1710px] h-[500px] w-[670px] object-cover desktop:left-0 desktop:top-[1725px] desktop:h-[376px] desktop:w-[510px] mobile:hidden"
        />

        <div className="absolute left-[860px] top-[1860px] w-[780px] desktop:left-[615px] desktop:top-[1760px] desktop:w-[780px] mobile:hidden">
          <h3 className="text-[45px] font-medium leading-none tracking-[-1.9px] text-pocket-muted desktop:text-[45px] desktop:font-medium desktop:tracking-[-1.6px] desktop:text-pocket-muted mobile:text-[32px] mobile:font-extrabold mobile:leading-[0.98] mobile:tracking-[-1.6px] mobile:text-black">
            and a <span className="font-extrabold text-pocket-yellow">photography company too...</span>
          </h3>
          <div className="mt-[57px] w-[880px] space-y-[26px] text-[20px] font-medium leading-[1.12] tracking-[-0.8px] text-pocket-muted desktop:mt-[56px] desktop:w-[660px] desktop:text-[20px] desktop:leading-[1.13] desktop:tracking-[-0.6px] desktop:text-pocket-muted mobile:mt-8 mobile:w-full mobile:text-[18px] mobile:leading-[1.17] mobile:tracking-[-0.8px] mobile:text-black">
            <p>
              As a photography company, we&apos;re able to squeeze every pixel to deliver images that perform. A photographer 
              must know how to communicate, and view a project from different perspectives, knowing how to create images that 
              jump out and catch attention. We strive to do just that. We offer product photography, people photography and 
              lifestyle photography across a wide range of sectors.
            </p>
            <p>
              As a content creation company, we know how to give you the best of both worlds: through the use of video
              production to tell a story across multiple shots, or where a single photograph has to say it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
