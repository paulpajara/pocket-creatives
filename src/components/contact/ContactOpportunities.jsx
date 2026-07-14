import React from "react";
import { ArrowRight } from "lucide-react";
import { contactPage } from "../../data/siteContent";

function EmailButton({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex h-[27px] items-center justify-center rounded-none bg-pocket-blue px-[10px] text-[13px] font-extrabold leading-none tracking-[-0.55px] text-white transition hover:bg-black mobile:text-[18px] mobile:h-[35px] desktop:h-[37px] desktop:px-[18px] desktop:text-[18px] desktop:tracking-[-0.8px] wide:h-[37px] wide:px-[18px] wide:text-[20px] wide:tracking-[-1px]"
    >
      {email}
    </a>
  );
}

function OpportunityCopy({ item, className = "" }) {
  return (
    <div className={className}>
      <h2 className="text-center text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black mobile:text-[38px] desktop:text-left desktop:text-[40px] desktop:tracking-[-2px] wide:text-left wide:text-[40px] wide:tracking-[-2px]">
        {item.title}
      </h2>
      <p className="mx-auto mt-[21px] max-w-[330px] text-[14px] font-extrabold leading-[1.18] tracking-[-0.6px] text-black mobile:text-[18px] mobile:font-medium desktop:mx-0 desktop:mt-[31px] desktop:max-w-[536px] desktop:text-[20px] desktop:font-medium desktop:tracking-[-1px] wide:mx-0 wide:mt-[31px] wide:max-w-[400px] wide:text-[22px] wide:font-medium wide:tracking-[-1px]">
        {item.copy}
      </p>
      <div className="mt-[22px] text-center desktop:mt-[32px] desktop:text-left wide:mt-[32px] wide:text-left">
        <EmailButton email={item.email} />
      </div>
    </div>
  );
}

export function ContactOpportunities() {
  const { vacancies, partners, seeWorksCircle } = contactPage.opportunities;

  return (
    <section className="relative overflow-hidden bg-pocket-yellow px-6 pb-[256px] pt-[200px] mobile:h-[1300px] desktop:h-[1104px] desktop:px-0 desktop:py-0 wide:h-[1187px] wide:px-0 wide:py-0">
      <div className="relative mx-auto h-full max-w-[1920px]">
        <div className="grid gap-[28px] desktop:absolute desktop:left-[128px] desktop:top-[107px] desktop:w-[1190px] desktop:grid-cols-[684px_437px] desktop:items-start desktop:gap-[69px] wide:absolute wide:left-[239px] wide:top-[136px] wide:w-[1457px] wide:grid-cols-[731px_1fr] wide:items-center wide:gap-[101px]">
          <img
            src={vacancies.media}
            alt={vacancies.alt}
            className="mx-auto aspect-[330/188] w-full max-w-[330px] object-cover desktop:h-[415px] desktop:max-w-none wide:h-[415px] wide:max-w-none"
            loading="lazy"
            decoding="async"
          />
          <OpportunityCopy item={vacancies} className="desktop:pt-[59px] wide:pt-[33px]" />
        </div>

        <div className="mt-[72px] grid gap-[28px] desktop:absolute desktop:left-[197px] desktop:top-[600px] desktop:mt-0 desktop:w-[1121px] desktop:grid-cols-[381px_646px] desktop:items-start desktop:gap-[94px] wide:absolute wide:left-[367px] wide:top-[626px] wide:mt-0 wide:w-[1312px] wide:grid-cols-[460px_805px] wide:items-center wide:gap-[47px]">
          <OpportunityCopy item={partners} className="order-2 desktop:order-1 desktop:pt-[48px] wide:order-1 wide:pt-[61px]" />
          <img
            src={partners.media}
            alt={partners.alt}
            className="order-1 mx-auto aspect-[330/188] w-full max-w-[330px] object-cover desktop:order-2 desktop:h-[415px] desktop:max-w-none wide:order-2 wide:h-[415px] wide:max-w-none"
            loading="lazy"
            decoding="async"
          />
        </div>

        <a
          href="/work/"
          className="group absolute hidden h-[125px] w-[125px] items-center justify-center text-center text-[24px] font-extrabold leading-[0.9] tracking-[-1.2px] text-white transition hover:scale-105 desktop:left-[1504px] desktop:top-[568px] desktop:flex wide:left-[1616px] wide:top-[551px] wide:flex"
          aria-label="See our works"
        >
          <img src={seeWorksCircle} alt="" className="absolute inset-0 h-full w-full" aria-hidden="true" />
          <span className="relative z-10 rotate-[7deg]">
            See Our
            <br />
            Works
          </span>
          <ArrowRight className="absolute bottom-[18px] right-[24px] z-10 h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
