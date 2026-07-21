import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, PoundSterling } from "lucide-react";
import { CarouselTrack, SwiperSlide } from "../CarouselTrack";
import { trainingCourses } from "../../data/trainingContent";

function CourseCard({ course, index, isOpen, onOpen, onClose }) {
  return (
    <article className="flex h-[350px] w-full overflow-hidden wide:h-[420px] mobile:h-auto mobile:flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="flex h-full w-[350px] shrink-0 items-center justify-between gap-8 bg-pocket-yellow p-10 text-left text-black wide:w-[420px] wide:p-12 mobile:h-[270px] mobile:w-full mobile:p-8"
        aria-expanded={isOpen}
        aria-controls={`course-examples-${index}`}
      >
        <span className="max-w-[245px] text-[30px] font-extrabold leading-[0.98] wide:max-w-[300px] wide:text-[38px] mobile:max-w-[245px] mobile:text-[31px]">
          {course.title}
        </span>
        <ArrowRight className="h-11 w-11 shrink-0 stroke-[2.4]" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={`course-examples-${index}`}
          className="relative flex h-full min-w-0 flex-1 items-center bg-pocket-blue px-14 py-10 text-white wide:px-20 mobile:min-h-[310px] mobile:w-full mobile:px-9 mobile:py-10"
        >
          <ul className="list-disc space-y-1 pl-7 text-[30px] font-extrabold leading-[1.02] wide:text-[38px] mobile:text-[25px] mobile:leading-[1.05]">
            {course.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onClose}
            className="absolute bottom-8 right-10 flex h-12 w-12 items-center justify-center transition-transform hover:-translate-x-1 mobile:bottom-5 mobile:right-6"
            aria-label={`Close ${course.title} course examples`}
          >
            <ArrowLeft className="h-11 w-11 stroke-[2.4]" aria-hidden="true" />
          </button>
        </div>
      )}
    </article>
  );
}

export function TrainingCourses({ onContactClick }) {
  const [openCourse, setOpenCourse] = useState(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper) return undefined;

    const timer = window.setTimeout(() => {
      swiper.update();
      if (openCourse !== null) swiper.slideTo(openCourse, 650);
    }, 40);

    return () => window.clearTimeout(timer);
  }, [openCourse, swiper]);

  return (
    <section id="example-courses" className="min-h-[820px] overflow-hidden bg-pocket-canvas py-24 wide:min-h-[1052px] wide:py-[150px] mobile:min-h-0 mobile:py-20">
      <div className="mx-auto w-full max-w-[1540px] px-8 wide:px-0 mobile:px-0">
        <h2 className="px-8 text-center text-[80px] font-medium leading-none text-pocket-muted wide:text-[120px] mobile:px-6 mobile:text-left mobile:text-[52px]">
          Example Courses
        </h2>

        <CarouselTrack
          onSwiper={setSwiper}
          className="mt-20 !overflow-visible wide:mt-[92px] mobile:mt-12"
          slidesPerView="auto"
          spaceBetween={48}
          observer
          observeParents
        >
          {trainingCourses.map((course, index) => {
            const isOpen = openCourse === index;

            return (
              <SwiperSlide
                key={course.title}
                className={isOpen
                  ? "!w-[820px] wide:!w-[1020px] mobile:!w-[calc(100vw-48px)]"
                  : "!w-[350px] wide:!w-[420px] mobile:!w-[calc(100vw-48px)]"}
              >
                <CourseCard
                  course={course}
                  index={index}
                  isOpen={isOpen}
                  onOpen={() => setOpenCourse(index)}
                  onClose={(event) => {
                    event.stopPropagation();
                    setOpenCourse(null);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </CarouselTrack>

        <div className="mt-10 flex justify-end px-8 wide:px-0 mobile:mt-8 mobile:justify-center mobile:px-6">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex h-[78px] min-w-[240px] items-center justify-center gap-4 bg-pocket-yellow px-8 text-[22px] font-medium text-black shadow-button transition-colors hover:bg-pocket-blue hover:text-white mobile:h-16 mobile:min-w-[200px] mobile:text-[19px]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pocket-blue text-white mobile:h-10 mobile:w-10">
              <PoundSterling className="h-7 w-7" aria-hidden="true" />
            </span>
            How Much?
          </button>
        </div>
      </div>
    </section>
  );
}
