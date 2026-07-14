import React from "react";
import { contactPage } from "../../data/siteContent";

function ContactDetail({ detail, className = "" }) {
  return (
    <a
      href={detail.href}
      target={detail.href.startsWith("http") ? "_blank" : undefined}
      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
      className={`group flex items-center gap-[13px] text-black transition-colors hover:text-pocket-yellow desktop:gap-[22px] desktop:text-pocket-muted wide:gap-[22px] wide:text-pocket-muted ${className}`}
      aria-label={detail.label}
    >
      <img
        src={detail.icon}
        alt=""
        className="h-[52px] w-[52px] shrink-0 mobile:h-[66px] mobile:w-[66px] desktop:h-[104px] desktop:w-[104px] wide:h-[104px] wide:w-[104px]"
      />
      <span className="whitespace-pre-line text-[14px] font-extrabold leading-[1.08] tracking-[-0.55px] mobile:text-[18px] desktop:text-[20px] desktop:leading-[1.17] desktop:tracking-[-1px] wide:text-[20px] wide:tracking-[-1px]">
        {detail.value}
      </span>
    </a>
  );
}

export function ContactLocation() {
  return (
    <section className="relative overflow-hidden bg-pocket-canvas desktop:h-[1076px] wide:h-[1179px]">
      <div className="relative mx-auto h-full max-w-[1920px]">
        <div className="grid grid-cols-1 gap-[20px] px-[20px] py-[45px] desktop:absolute desktop:left-[120px] desktop:top-[101px] desktop:w-[1200px] desktop:grid-cols-[293px_443px_362px] desktop:gap-[45px] desktop:p-0 wide:absolute wide:left-[249px] wide:top-[95px] wide:w-[1443px] wide:grid-cols-[350px_1fr_390px] wide:gap-[104px]">
          {contactPage.details.map((detail) => (
            <ContactDetail key={detail.label} detail={detail} />
          ))}
        </div>

        <div className="h-[800px] w-full overflow-hidden bg-white shadow-[0_2px_0_rgba(0,0,0,0.02)] desktop:absolute desktop:left-[123px] desktop:top-[270px] desktop:h-[667px] desktop:w-[1190px] wide:absolute wide:left-[249px] wide:top-[280px] wide:mt-0 wide:h-[809px] wide:w-[1443px]">
          <img
            src={contactPage.map.media}
            alt={contactPage.map.alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
