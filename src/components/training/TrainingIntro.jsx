import React from "react";
import { SoundToggleVideo } from "../about/SoundToggleVideo";
import { trainingIntroCopy } from "../../data/trainingContent";

export function TrainingIntro() {
  return (
    <section className="min-h-[920px] bg-pocket-canvas pb-24 pt-[170px] wide:min-h-[1056px] wide:pb-32 wide:pt-[220px] mobile:min-h-0 mobile:px-6 mobile:pb-20 mobile:pt-[145px]">
      <div className="mx-auto w-full max-w-[1440px] px-8 wide:px-0 mobile:px-0">
        <h1 className="max-w-[1420px] text-[64px] font-medium leading-[1.02] tracking-[-3.2px] text-black wide:text-[80px] wide:tracking-[-4px] mobile:text-[43px] mobile:font-semibold mobile:leading-[1.03] mobile:tracking-[-2.15px]">
          Check out our new in-person <span className="font-extrabold text-pocket-yellow">creative training courses</span> in{" "}
          <span className="font-extrabold text-pocket-blue">video production</span> and{" "}
          <span className="font-extrabold text-pocket-blue">photography</span>
        </h1>

        <div className="mt-[106px] grid grid-cols-[minmax(0,763px)_minmax(0,598px)] items-start gap-[76px] desktop:mt-[82px] desktop:grid-cols-[minmax(0,1fr)_minmax(0,520px)] desktop:gap-14 mobile:mt-12 mobile:block">
          <div className="space-y-5 text-[20px] font-medium leading-[1.22] tracking-[-0.7px] text-pocket-muted desktop:text-[18px] mobile:space-y-5 mobile:text-[18px] mobile:leading-[1.28] mobile:tracking-[-0.45px] mobile:text-black">
            {trainingIntroCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mobile:mt-10">
            <SoundToggleVideo
              src="/figma/video/hero-video.mp4"
              poster="/figma/hero-video.png"
              alt="Pocket Creatives studio and training location"
              className="aspect-[598/352] w-full bg-white"
            />
            <p className="mt-2 text-[14px] font-medium leading-none text-pocket-muted mobile:text-[12px]">
              *Click on Video to toggle sound
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
