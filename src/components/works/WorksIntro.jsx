import React from "react";
import { Mail } from "lucide-react";
import { asset } from "../../data/siteContent";

export function WorksIntro({ onContactClick }) {
  return (
    <section className="relative h-[922px] bg-pocket-canvas max-lg:h-auto max-lg:min-h-0 max-lg:pb-[64px] max-lg:pt-[182px]">
      <div className="relative mx-auto h-full max-w-[1920px] max-lg:flex max-lg:flex-col max-lg:gap-0 max-lg:px-[28px]">
        <div className="absolute left-[123px] top-[278px] w-[598px] max-lg:static max-lg:w-full wide:left-[205px] wide:top-[296px]">
          <h1 className="w-[680px] text-[40px] font-extrabold leading-[1.1] text-pocket-blue max-lg:hidden wide:w-[580px] wide:font-medium wide:text-pocket-muted">
            <span className="block">Looking for a team with a</span>
            <span className="block">
              <span className="bg-pocket-yellow px-1 text-black wide:bg-transparent wide:px-0 wide:text-pocket-blue">
                proven approach
              </span>{" "}
              to creating
            </span>
            <span className="block">great video and photography?</span>
            <span className="block font-extrabold">Then this is for you.</span>
          </h1>
          <h1 className="hidden text-[32px] font-extrabold leading-[1.06] text-pocket-blue max-lg:block">
            <span className="block">Looking for a</span>
            <span className="block">team with a</span>
            <span className="block">
              <span className="inline-block bg-pocket-yellow px-[5px] py-[2px] leading-[0.86] text-black">proven approach</span>{" "}
              <span>to</span>
            </span>
            <span className="block">creating great video</span>
            <span className="block">and photography?</span>
            <span className="block">Then this is for you.</span>
          </h1>
          <p className="mt-[31px] w-[598px] text-[20px] font-medium leading-[1.25] text-black max-lg:mt-[28px] max-lg:w-full max-lg:text-[18px] max-lg:leading-[1.28] wide:mt-[54px] wide:text-pocket-muted">
            Why deliver boring and uninspiring content when visuals can be exciting, engaging and can work harder to
            really impact your audience.
          </p>
          <button
            type="button"
            onClick={onContactClick}
            className="mt-[48px] inline-flex h-12 items-center gap-[7px] rounded-[10px] bg-pocket-yellow px-[18px] text-[20px] font-extrabold text-black shadow-button transition hover:bg-pocket-blue hover:text-white max-lg:mx-auto max-lg:mt-[44px] max-lg:flex max-lg:h-[58px] max-lg:w-fit max-lg:gap-[14px] max-lg:rounded-[18px] max-lg:px-[26px] max-lg:text-[17px] wide:mt-[39px] wide:px-[13px] wide:text-[16px]"
          >
            <Mail className="h-6 w-6 max-lg:h-[26px] max-lg:w-[26px]" aria-hidden="true" />
            Have questions?
          </button>
        </div>

        <div className="absolute left-[758px] top-[192px] h-[286px] w-[560px] bg-pocket-blue text-white max-lg:hidden wide:left-[873px] wide:top-[224px] wide:h-[265px] wide:w-[794px]">
          <img
            src={asset("works/works-stairs.svg")}
            alt=""
            className="absolute left-[49px] top-[45px] h-[62px] w-[70px] max-lg:static max-lg:mb-5 wide:left-[75px] wide:top-[37px] wide:h-[77px] wide:w-[87px]"
          />
          <h2 className="absolute left-[121px] top-[43px] w-[360px] whitespace-nowrap text-[58px] font-extrabold leading-[0.95] max-lg:static max-lg:w-full max-lg:whitespace-normal max-lg:text-[54px] wide:left-[173px] wide:top-[30px] wide:w-[600px] wide:text-[76px]">
            How we work
          </h2>
          <p className="absolute left-[49px] top-[130px] w-[460px] text-[20px] font-medium leading-[1.15] max-lg:static max-lg:mt-6 max-lg:w-full wide:left-[75px] wide:top-[130px] wide:w-[647px] wide:leading-[1.25]">
            It&apos;s as important to understand how a company works, as it is to see the quality of their end results.
            The way that we go about running our projects and constructing our service plays a big part in deciding
            whether we get to work together.
          </p>
        </div>

        <div className="absolute left-[758px] top-[517px] h-[314px] w-[560px] bg-pocket-yellow text-black max-lg:hidden wide:left-[873px] wide:top-[516px] wide:h-[278px] wide:w-[794px]">
          <img
            src={asset("works/works-flag.svg")}
            alt=""
            className="absolute left-[46px] top-[32px] h-[64px] w-[56px] max-lg:static max-lg:mb-5 wide:left-[81px] wide:top-[36px] wide:h-[79px] wide:w-[69px]"
          />
          <h2 className="absolute left-[123px] top-[32px] w-[363px] text-[30px] font-extrabold leading-[1.05] max-lg:static max-lg:w-full max-lg:text-[42px] wide:left-[170px] wide:top-[29px] wide:w-[545px] wide:text-[38px] wide:leading-[1.08]">
            A successful project starts with great service
          </h2>
          <p className="absolute left-[46px] top-[127px] w-[460px] text-[20px] font-bold leading-[1.08] max-lg:static max-lg:mt-6 max-lg:w-full wide:left-[72px] wide:top-[142px] wide:w-[645px] wide:leading-[1.12]">
            Our current process is based on years of experience and learning: reflecting on the times that we got it
            wrong, doing more of what we get right and constantly reviewing and refining. Every decision that&apos;s formed
            our creative approach is based on one of these factors.
          </p>
        </div>
      </div>
    </section>
  );
}
