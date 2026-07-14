import React from "react";
import { Mail } from "lucide-react";
import { asset } from "../../data/siteContent";

function IntroCopy({ className = "" }) {
  return (
    <div className={className}>
      <p>
        Pocket Creatives is a video production and photography team built on over 16 years of experience in the visual
        and creative industries. Run by co-owners <strong className="text-white">Steven</strong>,{" "}
        <strong className="text-white">Haider</strong> and <strong className="text-white">Lauren</strong>, our team
        loves producing great video and photography, and we like to think that it shows in the work we deliver.
      </p>
      <p>
        We&apos;ve worked hard to assemble a talented team who can deliver high quality video production services, as well
        as video and photography content creation.
      </p>
      <p>
        Drop us a mail, we&apos;re a friendly bunch and are more than happy to chat about what we could offer on your next
        project!
      </p>
    </div>
  );
}

function TeamImage({ className = "" }) {
  return (
    <div className={`overflow-hidden bg-white ${className}`}>
      <img src={asset("team-steven-figma.png")} alt="" className="absolute left-0 top-0 h-full w-1/3 object-cover object-top" />
      <img src={asset("team-haider-figma.png")} alt="" className="absolute left-1/3 top-0 h-full w-1/3 object-cover object-top" />
      <img src={asset("team-lauren-figma.png")} alt="" className="absolute left-2/3 top-0 h-full w-1/3 object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-pocket-blue/10 to-transparent" />
    </div>
  );
}

export function AboutCompanyIntro({ onContactClick }) {
  return (
    <section className="relative h-[1080px] bg-pocket-blue text-black desktop:h-[965px] mobile:h-auto">
      <div className="relative mx-auto h-full max-w-[1920px] mobile:hidden">
        <h2 className="absolute left-[233px] top-[186px] w-[1320px] text-[78px] font-extrabold leading-[0.98] tracking-[-3.9px] text-white desktop:left-[113px] desktop:top-[118px] desktop:w-[1120px] desktop:text-[64px] desktop:leading-[1.05] desktop:tracking-[-3.2px]">
          Video production and photography at
          <br />
          Pocket Creatives
        </h2>

        <IntroCopy className="absolute left-[233px] top-[413px] w-[600px] space-y-[22px] text-[20px] font-medium leading-[2] tracking-[-1px] desktop:left-[113px] desktop:top-[315px] desktop:w-[575px] desktop:space-y-[34px] desktop:text-[17px] desktop:leading-[2.1] desktop:tracking-[-0.85px]" />

        <TeamImage className="absolute left-[979px] top-[402px] h-[394px] w-[674px] desktop:left-[756px] desktop:top-[396px] desktop:h-[310px] desktop:w-[530px]" />

        <div className="absolute left-[933px] top-[340px] flex h-[108px] w-[108px] rotate-[-8deg] items-center justify-center rounded-full bg-pocket-yellow text-center text-[18px] font-extrabold leading-[0.95] tracking-[-0.9px] text-black desktop:left-[732px] desktop:top-[368px] desktop:h-[88px] desktop:w-[88px] desktop:text-[15px]">
          This is
          <br />
          us...
        </div>

        <button
          type="button"
          onClick={onContactClick}
          className="absolute left-[233px] top-[872px] inline-flex h-[68px] w-[68px] items-center justify-center rounded-full bg-pocket-yellow text-black shadow-button transition hover:scale-105 hover:bg-white desktop:left-[113px] desktop:top-[812px]"
          aria-label="Email Pocket Creatives"
        >
          <Mail className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      <div className="hidden overflow-hidden px-6 py-[78px] mobile:flex mobile:flex-col">
        <h2 className="w-full max-w-[342px] break-words text-[36px] font-extrabold leading-[1.06] tracking-[-1.8px] text-white">
          Video production and photography at Pocket Creatives
        </h2>

        <TeamImage className="relative mt-9 h-[207px] w-full" />

        <IntroCopy className="mt-11 w-full max-w-[342px] break-words space-y-7 text-[20px] font-medium leading-[1.16] tracking-[-0.8px]" />
      </div>
    </section>
  );
}
