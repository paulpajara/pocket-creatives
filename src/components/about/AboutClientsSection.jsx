import React, { useEffect, useState } from "react";
import { ClientLogoCarousel } from "../ClientLogoCarousel";
import { clientNames } from "../../data/siteContent";

export function AboutClientsSection() {
  const [activeClientIndex, setActiveClientIndex] = useState(0);
  const activeClientName = clientNames[activeClientIndex % clientNames.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveClientIndex((index) => (index + 1) % clientNames.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[860px] bg-pocket-blue text-white desktop:h-[760px] mobile:h-auto mobile:overflow-hidden mobile:py-[78px]">
      <div className="relative mx-auto h-full w-[1500px] max-w-[calc(100vw-160px)] desktop:w-[1220px] desktop:max-w-[calc(100vw-160px)] mobile:flex mobile:h-auto mobile:w-full mobile:max-w-none mobile:flex-col mobile:px-6">
        <h2 className="absolute left-0 top-[170px] text-[96px] font-extrabold leading-none tracking-[-4.8px] desktop:top-[138px] desktop:text-[76px] desktop:tracking-[-3.8px] mobile:static mobile:max-w-[342px] mobile:break-words mobile:text-[56px] mobile:leading-[1.04] mobile:tracking-[-2.8px]">
          <span className="mobile:hidden">Who We Work With</span>
          <span className="hidden mobile:block">
            Who We
            <br />
            Work With
          </span>
        </h2>
        <div className="absolute left-[44px] top-[305px] w-[610px] space-y-[28px] text-[18px] font-medium leading-[1.14] tracking-[-0.8px] desktop:left-0 desktop:top-[265px] desktop:w-[400px] desktop:space-y-[24px] desktop:text-[15px] desktop:leading-[1.14] desktop:tracking-[-0.7px] mobile:static mobile:mt-9 mobile:w-full mobile:max-w-[342px] mobile:break-words mobile:space-y-7 mobile:text-[20px] mobile:leading-[1.12] mobile:tracking-[-0.8px]">
          <p>
            We have provided video and photography services to a huge variety of clients in our history, from
            crowdfunders and startups through to more established names and global businesses. We love that mix, and
            being entrusted with the visuals for clients of any size is extremely satisfying.
          </p>
          <p>
            We work with most clients directly, and we&apos;re also able to provide our services to agencies and other
            creative companies who don&apos;t have access to video and photography services in house.
          </p>
          <p>
            We&apos;re very proud to have worked with known clients such as{" "}
            <span
              key={activeClientName}
              className="client-highlight-name inline whitespace-nowrap bg-pocket-yellow px-1.5 font-extrabold leading-[1.05] text-black"
            >
              {activeClientName}
            </span>
            {" "}and many more emerging names that you&apos;ll come to know very soon.
          </p>
        </div>

        <a
          href="#reviews"
          className="hidden mobile:mx-auto mobile:mt-9 mobile:flex mobile:h-[68px] mobile:w-[202px] mobile:items-center mobile:justify-center mobile:rounded-[12px] mobile:bg-pocket-yellow mobile:text-center mobile:text-[20px] mobile:font-extrabold mobile:leading-none mobile:tracking-[-0.8px] mobile:text-black mobile:shadow-button mobile:transition mobile:hover:bg-white"
        >
          View Testimonials
        </a>

        <div className="absolute right-[86px] top-[285px] w-[620px] overflow-hidden desktop:right-0 desktop:top-[276px] desktop:w-[590px] mobile:hidden">
          <ClientLogoCarousel
            heightClassName="h-[334px] desktop:h-[305px] mobile:h-[290px]"
            className="w-[620px] desktop:w-[590px] mobile:w-full"
            gridClassName="gap-[18px] desktop:gap-[16px] mobile:gap-3"
            cardClassName="h-[94px] rounded-[12px] p-4 shadow-button desktop:h-[82px] desktop:rounded-[10px] mobile:h-[82px] mobile:p-3"
            imageClassName="max-h-[62px] max-w-[154px] desktop:max-h-[54px] desktop:max-w-[142px] mobile:max-h-[52px] mobile:max-w-[110px]"
          />
          <a
            href="#reviews"
            className="ml-auto mt-[10px] flex h-[90px] w-[186px] items-center justify-center rounded-[12px] bg-pocket-yellow p-3 text-right text-[18px] font-extrabold leading-[0.95] tracking-[-0.7px] text-black shadow-button transition hover:bg-white desktop:h-[78px] desktop:w-[160px] desktop:rounded-[10px] desktop:text-[14px] mobile:mt-6 mobile:h-[86px] mobile:w-[174px] mobile:text-[14px]"
          >
            <span>
              You can see what
              <br />
              they say about
              <br />
              us <span className="underline">here</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
