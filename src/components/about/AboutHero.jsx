import React from "react";
import { Mail } from "lucide-react";
import { asset } from "../../data/siteContent";

export function AboutHero({ onContactClick }) {
  return (
    <section className="relative h-[1080px] bg-pocket-canvas desktop:h-[1024px] mobile:h-auto mobile:pt-[158px] mobile:pb-[72px]">
      <div className="relative mx-auto h-full max-w-[1920px] mobile:flex mobile:h-auto mobile:flex-col mobile:px-6">
        <h1 className="absolute left-[360px] top-[252px] text-[120px] font-light leading-none tracking-[-6px] text-pocket-muted desktop:left-[130px] desktop:top-[220px] desktop:text-[88px] desktop:font-normal desktop:tracking-[-4.4px] desktop:text-black mobile:static mobile:text-[64px] mobile:font-normal mobile:tracking-[-3.2px] mobile:text-black">
          About us at
        </h1>
        <img
          src={asset("pocket-about-logo.png")}
          alt="Pocket Creatives"
          className="absolute left-[360px] top-[378px] h-[118px] w-[1017px] object-cover object-left desktop:hidden mobile:hidden"
        />
        <div className="absolute left-[130px] top-[325px] hidden text-[86px] font-extrabold leading-none tracking-[-4.3px] desktop:block mobile:static mobile:mt-2 mobile:block mobile:text-[60px] mobile:tracking-[-3px]">
          <span className="text-pocket-cyan">Pocket</span>{" "}
          <span className="text-pocket-yellow">Creatives</span>
        </div>

        <div className="absolute left-[357px] top-[540px] desktop:left-[126px] desktop:top-[500px] mobile:static mobile:mt-[48px] mobile:w-full">
          <img
            src={asset("bts-blonde-thumb.png")}
            alt="Pocket Creatives production team working with studio lighting"
            className="h-[350px] w-[600px] object-cover desktop:h-[350px] desktop:w-[590px] mobile:h-[250px] mobile:w-full"
          />
          
        </div>

        <div className="about-hero-copy absolute left-[1034px] top-[552px] flex w-[506px] flex-col items-center text-right desktop:left-[800px] desktop:top-[505px] mobile:static mobile:mt-10 mobile:w-[calc(100vw-48px)] mobile:max-w-[calc(100vw-48px)] mobile:shrink-0 mobile:items-start mobile:text-left">
          <p className="w-[500px] text-[20px] font-medium leading-[2.05] tracking-[-1px] text-pocket-muted desktop:w-[510px] desktop:text-[18px] desktop:leading-[2] desktop:tracking-[-0.9px] desktop:text-black mobile:block mobile:w-full mobile:max-w-[calc(100vw-48px)] mobile:whitespace-normal mobile:text-[20px] mobile:leading-[1.38] mobile:tracking-[-0.8px] mobile:text-black mobile:[overflow-wrap:anywhere]">
            Find out more about our production team, what we stand for and why you would choose us for your next video
            production or photography shoot.
          </p>
          <button
            type="button"
            onClick={onContactClick}
            className="mt-[43px] ml-[250px] inline-flex h-[65px] w-[248px] items-center justify-center gap-[17px] bg-pocket-cyan text-[18px] font-medium uppercase tracking-[-0.9px] text-black shadow-[6px_6px_6px_rgba(82,110,135,0.55)] transition hover:bg-pocket-yellow desktop:mt-[43px] mobile:ml-[55px] mobile:h-[62px] mobile:w-[250px]"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            I&apos;d like to chat
          </button>
        </div>
      </div>
    </section>
  );
}
