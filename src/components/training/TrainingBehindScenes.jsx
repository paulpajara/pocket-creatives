import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { SoundToggleVideo } from "../about/SoundToggleVideo";
import { trainingBehindScenes } from "../../data/trainingContent";

export function TrainingBehindScenes() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="min-h-[980px] overflow-hidden bg-pocket-yellow py-24 wide:min-h-[1220px] wide:py-[140px] mobile:min-h-0 mobile:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-8 wide:px-0 mobile:px-4">
        <h2 className="text-[84px] font-extrabold leading-none text-black wide:text-[120px] mobile:text-[58px] mobile:leading-[0.98]">
          Want to see us at work?
        </h2>
        <div className="mt-12 max-w-[1120px] space-y-5 text-[19px] font-medium leading-[1.2] wide:text-[20px] mobile:mt-8 mobile:text-[18px] mobile:leading-[1.18]">
          <p className="mobile:underline mobile:decoration-pocket-blue mobile:decoration-2 mobile:underline-offset-2">If you hadn't already guessed, we love what we do, and we're proud of the video production projects that our team have delivered.</p>
          <p className="mobile:underline mobile:decoration-pocket-blue mobile:decoration-2 mobile:underline-offset-2">Have a look at some of these behind the scenes videos to see what it's like to be on set with us.</p>
        </div>

        <div className="relative mx-auto mt-14 max-w-[1380px] px-[92px] wide:mt-[70px] wide:px-[160px] mobile:mt-8 mobile:px-0">
          <CarouselTrack
            onSwiper={setSwiper}
            freeMode={false}
            slidesPerView={1}
            speed={700}
            overflowVisible={false}
            className="!overflow-hidden"
          >
            {trainingBehindScenes.map((item) => (
              <SwiperSlide key={item.src}>
                <SoundToggleVideo
                  src={item.src}
                  poster={item.poster}
                  alt={item.alt}
                  className="aspect-[1060/618] w-full bg-black mobile:aspect-[4/3]"
                />
              </SwiperSlide>
            ))}
          </CarouselTrack>

          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center text-black transition-transform hover:-translate-x-1 mobile:hidden"
            aria-label="Previous behind-the-scenes video"
          >
            <ArrowLeft className="h-16 w-16 stroke-[1.5]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center text-black transition-transform hover:translate-x-1 mobile:hidden"
            aria-label="Next behind-the-scenes video"
          >
            <ArrowRight className="h-16 w-16 stroke-[1.5]" aria-hidden="true" />
          </button>

          <p className="mt-2 text-[14px] font-medium leading-none text-pocket-muted mobile:hidden">
            *Click on Video to toggle sound
          </p>

          <div className="mt-4 hidden justify-center gap-3 mobile:flex">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pocket-blue text-white shadow-button"
              aria-label="Previous behind-the-scenes video"
            >
              <ArrowLeft className="h-7 w-7" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pocket-blue text-white shadow-button"
              aria-label="Next behind-the-scenes video"
            >
              <ArrowRight className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
