import React from "react";
import { asset } from "../../data/siteContent";
import { SoundToggleVideo } from "./SoundToggleVideo";

export function AboutBehindScenes() {
  return (
    <section className="relative h-[100px] bg-pocket-canvas desktop:h-[920px] mobile:h-auto mobile:py-[84px]">
      <div className="relative mx-auto h-full max-w-[1920px] mobile:flex mobile:h-auto mobile:flex-col mobile:px-6">
        <p className="absolute left-1/2 top-[92px] w-[1430px] -translate-x-1/2 text-[36px] font-medium leading-[1.12] tracking-[-1.8px] text-black desktop:top-[128px] desktop:w-[1120px] desktop:text-[32px] desktop:font-extrabold desktop:leading-[1.1] desktop:tracking-[-1.6px] mobile:static mobile:w-full mobile:translate-x-0 mobile:text-[32px] mobile:font-extrabold mobile:leading-[1.05] mobile:tracking-[-1.6px]">
          Want to know a bit more about who we work with, and{" "}
          <strong>what makes a &apos;Pocket Person&apos;?</strong> Go behind the scenes to see how we work in action...
        </p>
        <SoundToggleVideo
          src={asset("")}
          poster={asset("bts-camera-thumb.png")}
          alt="Behind the scenes with Pocket Creatives"
          className="absolute left-1/2 top-[232px] h-[560px] w-[1350px] -translate-x-1/2 desktop:top-[278px] desktop:h-[545px] desktop:w-[1035px] mobile:static mobile:mt-9 mobile:h-[270px] mobile:w-full mobile:translate-x-0"
        />
        
      </div>
    </section>
  );
}
