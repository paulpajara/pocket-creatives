import React, { useState } from "react";
import { ArrowRight, PoundSterling, X } from "lucide-react";
import { trainingCourses } from "../../data/trainingContent";

function CourseCard({ course, index, isOpen, onToggle }) {
  return (
    <article
      className={`relative min-h-[330px] overflow-hidden transition-colors duration-300 wide:min-h-[420px] mobile:min-h-0 ${
        isOpen ? "bg-pocket-blue text-white" : "bg-pocket-yellow text-black"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[330px] w-full items-end justify-between gap-6 p-10 text-left wide:min-h-[420px] wide:p-12 mobile:min-h-[250px] mobile:p-8"
        aria-expanded={isOpen}
        aria-controls={`course-examples-${index}`}
      >
        <span className="max-w-[270px] text-[28px] font-extrabold leading-[0.98] tracking-[-1.4px] wide:text-[34px] wide:tracking-[-1.7px] mobile:text-[30px] mobile:tracking-[-1.5px]">
          {course.title}
        </span>
        {isOpen ? <X className="h-9 w-9 shrink-0" /> : <ArrowRight className="h-10 w-10 shrink-0" />}
      </button>

      {isOpen && (
        <div id={`course-examples-${index}`} className="border-t border-white/50 px-10 pb-10 pt-7 wide:px-12 wide:pb-12 mobile:px-8">
          <p className="text-[16px] font-extrabold uppercase tracking-[0.08em]">Course examples</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[18px] font-medium leading-[1.2]">
            {course.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function TrainingCourses({ onContactClick }) {
  const [openCourse, setOpenCourse] = useState(null);

  return (
    <section id="example-courses" className="min-h-[850px] bg-pocket-canvas py-24 wide:min-h-[1052px] wide:py-[150px] mobile:min-h-0 mobile:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-8 wide:px-0 mobile:px-6">
        <h2 className="text-center text-[80px] font-extrabold leading-none tracking-[-4px] text-pocket-muted wide:text-[120px] wide:tracking-[-6px] mobile:text-left mobile:text-[52px] mobile:tracking-[-2.6px]">
          Example Courses
        </h2>

        <div className="mt-20 grid grid-cols-3 items-start gap-14 wide:mt-[92px] wide:gap-[72px] mobile:mt-12 mobile:grid-cols-1 mobile:gap-6">
          {trainingCourses.map((course, index) => (
            <CourseCard
              key={course.title}
              course={course}
              index={index}
              isOpen={openCourse === index}
              onToggle={() => setOpenCourse((current) => (current === index ? null : index))}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end wide:mt-10 mobile:mt-10">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex h-[78px] min-w-[220px] items-center justify-center gap-4 bg-pocket-yellow px-8 text-[22px] font-extrabold text-black shadow-button transition-colors hover:bg-pocket-blue hover:text-white mobile:h-16 mobile:min-w-[190px] mobile:text-[19px]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pocket-blue text-white mobile:h-9 mobile:w-9">
              <PoundSterling className="h-6 w-6" aria-hidden="true" />
            </span>
            How Much?
          </button>
        </div>
      </div>
    </section>
  );
}
