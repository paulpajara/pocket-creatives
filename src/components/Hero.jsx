import React from "react";
import { Heart } from "lucide-react";
import { asset } from "../data/siteContent";
import { VideoThumb } from "./VideoThumb";

export function Hero({ onContactClick }) {
  return (
    <section id="home" className="relative bg-pocket-canvas lg:h-[1409px] wide:h-[1419px]">
      <div className="relative mx-auto hidden h-full max-w-[1440px] lg:block">
        <h1
          className="absolute left-[clamp(37px,8.333vw,120px)] top-[237px] z-10 w-[calc(100vw-clamp(74px,16.666vw,240px))] max-w-[1200px] break-words text-[48px] font-medium leading-[0] tracking-[-2.4px] text-pocket-muted wide:hidden"
          data-node-id="1:1342"
        >
          <span className="block font-extrabold leading-[2]">Pocket Creatives:</span>
          <span className="block leading-[2]">
            A <span className="italic text-pocket-blue">fast</span> &amp;{" "}
            <span className="font-extrabold text-pocket-yellow">friendly</span>{" "}
            <span className="font-bold text-pocket-ink">Video Production</span> and{" "}
            <span className="font-bold text-pocket-ink">Photography</span>
          </span>
          <span className="block leading-[1.5]">
            company with <span className="font-bold text-pocket-ink">bags of experience</span> &amp; who{" "}
            <span className="text-[#ff1e00]" aria-label="love">
              {"\u2665"}
            </span>{" "}
            what we do.
          </span>
        </h1>
        <div
          className="absolute left-[clamp(37px,8.333vw,120px)] top-[322px] h-px w-[calc(100vw-clamp(74px,16.666vw,240px))] max-w-[1200px] bg-pocket-muted/45 wide:hidden"
          data-node-id="1:1346"
        />
        <img
          src={asset("logo.png")}
          alt="Pocket Creatives"
          className="absolute left-[-2px] top-[220px] hidden h-[102px] w-[293px] object-cover object-left wide:block"
        />
        <h1 className="absolute left-[-2px] top-[335px] z-10 hidden w-[1440px] break-words text-[48px] font-medium leading-[1.5] tracking-[-2.4px] text-pocket-muted wide:block">
          We&apos;re a <span className="font-extrabold text-pocket-yellow">fast</span> &amp;{" "}
          <span className="font-extrabold text-pocket-yellow">friendly</span>{" "}
          <span className="font-extrabold text-pocket-blue">Video Production</span> and{" "}
          <span className="font-extrabold text-pocket-blue">Photography</span> company
          <br />
          with <span className="font-extrabold text-pocket-yellow">bags of experience</span> &amp; who{" "}
          <span className="text-[#ff1e00]" aria-label="love">
            {"\u2665"}
          </span>{" "}
          what we do :)
        </h1>
        <div className="absolute left-[-2px] top-[322px] hidden h-px w-[1440px] bg-pocket-muted/60 wide:block" />
        <img
          src={asset("hero-director-a.png")}
          alt=""
          className="pointer-events-none absolute right-[174px] top-[163px] hidden h-[159px] w-[237px] object-cover xl:block wide:left-[1154px] wide:right-auto wide:w-[284px]"
          data-node-id="1:1343"
        />
        <img
          src={asset("hero-director-b.png")}
          alt=""
          className="pointer-events-none absolute right-[449px] top-[173px] hidden h-[149px] w-[201px] -scale-x-100 object-cover xl:block wide:left-[1108px] wide:right-auto wide:w-[241px]"
          data-node-id="1:1344"
        />

        <VideoThumb
          src={asset("video/hero-video.mp4")}
          alt="Pocket Creatives brand film thumbnail"
          label="Open project enquiry for brand film"
          onClick={onContactClick}
          className="absolute left-[37px] top-[609px] h-[768px] !w-[calc(100vw-74px)] max-w-[1366px] wide:left-[-2px] wide:top-[569px] wide:h-[810px] wide:!w-[1440px] wide:max-w-none"
          showPlay={false}
        />
      </div>

      <div className="relative h-[752px] lg:hidden">
        <img
          src={asset("logo-horizontal-mobile.png")}
          alt="Pocket Creatives"
          className="absolute left-5 top-[153px] h-7 w-[264px] object-contain object-left"
        />
        <div className="absolute left-5 top-[186px] h-px w-[390px] max-w-[calc(100vw-40px)] bg-pocket-muted/70" />
        <h1 className="absolute left-5 top-[204px] w-[390px] max-w-[calc(100vw-40px)] break-words text-[30px] font-medium leading-[1.5] text-pocket-muted">
          A <span className="font-extrabold text-pocket-blue">fast</span> &amp;{" "}
          <span className="font-extrabold text-pocket-blue">friendly</span>{" "}
          <span className="font-bold text-pocket-ink">Video Production</span> and{" "}
          <span className="font-bold text-pocket-ink">Photography</span> company with{" "}
          <span className="font-bold text-pocket-ink">bags of experience</span> and who{" "}
          <Heart className="inline h-8 w-8 fill-[#ff1e00] stroke-[#ff1e00] align-[-0.14em]" aria-label="love" /> what
          we do. :)
        </h1>

        <VideoThumb
          src={asset("video/hero-video.mp4")}
          alt="Pocket Creatives brand film thumbnail"
          label="Open project enquiry for brand film"
          onClick={onContactClick}
          className="absolute left-5 top-[496px] h-[220px] w-[390px] max-w-[calc(100vw-40px)] rounded-md shadow-none"
          showPlay={false}
        />
      </div>
    </section>
  );
}
