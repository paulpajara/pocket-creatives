import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { featuredBlogPosts } from "../../data/blogContent";

function FeaturedBlogCard({ post }) {
  return (
    <article className="group relative h-[570px] w-full overflow-hidden bg-pocket-yellow shadow-soft desktop:h-[688px] wide:h-[822px]">
      <img
        src={post.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pocket-yellow via-pocket-yellow/80 to-transparent" />
      <div className="absolute bottom-7 left-6 right-6 desktop:bottom-[50px] desktop:left-[55px] desktop:right-[55px] wide:bottom-[53px] wide:left-[80px] wide:right-[80px]">
        <h2 className="inline box-decoration-clone bg-pocket-blue px-3 py-1 text-[24px] font-extrabold leading-[1.18] text-white desktop:px-4 desktop:py-2 desktop:text-[32px] wide:text-[36px]">
          {post.title}
        </h2>
        <p className="mt-4 text-[16px] font-extrabold leading-tight desktop:mt-5 desktop:text-[20px]">
          {post.categories.join(", ")}
        </p>
        <a
          href={`#post-${post.slug}`}
          className="mt-3 inline-flex items-center gap-2 text-[17px] font-semibold leading-none transition-colors hover:text-white desktop:text-[20px]"
        >
          Read More <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function FeaturedBlogCarousel() {
  const [swiper, setSwiper] = useState(null);
  const [navigation, setNavigation] = useState({ isBeginning: true, isEnd: false });

  const syncNavigation = (instance) => {
    setNavigation({ isBeginning: instance.isBeginning, isEnd: instance.isEnd });
  };

  return (
    <section id="featured-blogs" className="h-[800px] overflow-hidden bg-pocket-canvas pt-[125px] desktop:h-[940px] desktop:pt-[112px] wide:h-[1142px] wide:pt-[148px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <CarouselTrack
          onSwiper={(instance) => {
            setSwiper(instance);
            syncNavigation(instance);
          }}
          onSlideChange={syncNavigation}
          onResize={syncNavigation}
          freeMode={false}
          speed={700}
          slidesPerView="auto"
          spaceBetween={16}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          overflowVisible={false}
          breakpoints={{
            768: { spaceBetween: 36, slidesOffsetBefore: 72, slidesOffsetAfter: 72 },
            1600: { spaceBetween: 60, slidesOffsetBefore: 172, slidesOffsetAfter: 172 }
          }}
          className="!overflow-visible"
        >
          {featuredBlogPosts.map((post) => (
            <SwiperSlide
              key={post.slug}
              className="!w-[calc(100vw-48px)] desktop:!w-[920px] wide:!w-[1100px]"
            >
              <FeaturedBlogCard post={post} />
            </SwiperSlide>
          ))}
        </CarouselTrack>

        <div className="mx-auto mt-7 flex min-h-12 items-center justify-center gap-3 desktop:mt-9 desktop:min-h-14 wide:mt-10">
          {!navigation.isBeginning && (
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pocket-blue text-white shadow-button transition-colors hover:bg-pocket-yellow hover:text-black desktop:h-14 desktop:w-14"
              aria-label="Show previous featured article"
            >
              <ArrowLeft className="h-7 w-7" aria-hidden="true" />
            </button>
          )}

          {!navigation.isEnd && (
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pocket-blue text-white shadow-button transition-colors hover:bg-pocket-yellow hover:text-black desktop:h-14 desktop:w-14"
              aria-label="Show next featured article"
            >
              <ArrowRight className="h-7 w-7" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
