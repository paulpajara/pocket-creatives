import React from "react";
import { asset } from "../../data/siteContent";
import { OutlineNumber } from "../shared/OutlineNumber";

function GiantOutlineNumber({ number, className }) {
  return (
    <OutlineNumber
      number={number}
      className={className}
      stroke="var(--outline-stroke, 24px) rgba(215, 220, 224, 0.58)"
    />
  );
}

export function WorksStorySection() {
  return (
    <section className="relative h-[1460px] bg-pocket-canvas max-lg:h-auto max-lg:border-t-[3px] max-lg:border-pocket-blue max-lg:px-4 max-lg:pb-[38px] max-lg:pt-[35px] wide:h-[1533px]">
      <div className="relative mx-auto h-full max-w-[1920px] overflow-hidden max-lg:flex max-lg:h-full max-lg:flex-col max-lg:gap-0">
        <GiantOutlineNumber
          number="2"
          className="pointer-events-none absolute left-[618px] top-[48px] select-none text-[800px] font-extrabold leading-none [--outline-stroke:24px] max-lg:left-[36px] max-lg:top-[490px] max-lg:text-[440px] max-lg:[--outline-stroke:8px] wide:left-[591px] wide:top-[-198px] wide:text-[1100px]"
        />

        <img
          src={asset("works/works-camera-shoot.png")}
          alt="A Pocket Creatives camera operator reviewing a shot on set"
          className="absolute left-0 top-[224px] h-[552px] w-[623px] object-cover max-lg:static max-lg:order-1 max-lg:aspect-[253/151] max-lg:h-auto max-lg:w-full wide:top-[120px] wide:h-[529px] wide:w-[755px]"
        />

        <article className="absolute left-[705px] top-[224px] w-[603px] max-lg:static max-lg:order-2 max-lg:mt-[18px] max-lg:w-full wide:left-[891px] wide:top-[123px] wide:w-[946px]">
          <h2 className="text-[30px] font-extrabold leading-none text-black max-lg:text-[28px] max-lg:leading-[0.92] wide:text-[40px] wide:text-pocket-muted">
            Yes, you can join us for the shoot!
          </h2>
          <div className="mt-[31px] w-[598px] space-y-[16px] text-[16px] font-medium leading-[1.05] text-black max-lg:mt-[22px] max-lg:w-full max-lg:space-y-[18px] max-lg:text-[14px] max-lg:leading-[1.05] wide:mt-[43px] wide:w-[740px] wide:space-y-[22px] wide:text-[20px] wide:leading-[1.2] wide:text-pocket-muted">
            <p>
              Crazily, we still hear stories about clients being banned from attending shoots when working with some
              other agencies or production companies. It just doesn&apos;t make sense to us. We love having clients with us
              on set, and here&apos;s why... If the shot isn&apos;t as you like, you can tell us and we can change it. As simple as
              it is brilliant! We can avoid all of those difficult conversations in the edit about &quot;wishing that cup was
              placed just a bit more to the left...&quot; and just fix it there and then.
            </p>
            <p>
              The beauty of anything creative is that there&apos;s no right and wrong, just loads of grey between the black
              and white. Whether something looks right is often perception, and as you&apos;re the client, we&apos;re here to make
              sure that the work we produce looks right to you.
            </p>
            <p>
              And who doesn&apos;t like those orgasmic sounds of pleasure when that shot is EXACTLY as you like it? Believe
              it or not, most creatives suffer with imposter syndrome - we question every one of our own decisions, but
              take tremendous pride in delivering high quality work. That little noise you make when you like what you
              see on the screen means the world.
            </p>
          </div>
        </article>

        <article className="absolute left-[134px] top-[892px] w-[627px] max-lg:static max-lg:order-4 max-lg:mt-[20px] max-lg:w-full wide:left-[190px] wide:top-[887px] wide:w-[862px]">
          <h2 className="text-[30px] font-extrabold leading-[0.95] text-black max-lg:text-[28px] wide:text-[40px] wide:leading-none wide:text-pocket-muted">
            If it&apos;s right first time, something&apos;s wrong
          </h2>
          <div className="mt-[19px] w-[627px] space-y-[16px] text-[16px] font-medium leading-[1.05] text-black max-lg:mt-[18px] max-lg:w-full max-lg:space-y-[18px] max-lg:text-[14px] max-lg:leading-[1.05] wide:mt-[43px] wide:w-[816px] wide:space-y-[22px] wide:text-[20px] wide:leading-[1.2] wide:text-pocket-muted">
            <p>
              With a million and one ways to edit a video or a still image, the distance between right and wrong gets
              further apart. One great aspect of working digitally is that you get to move things, delete things, put
              things back as they were four versions ago, all with relative ease.
            </p>
            <p>
              We don&apos;t expect you to know whether you&apos;re happy until you&apos;ve seen it, and if you don&apos;t love it, we can
              change it. Your budget will have included time for review, feedback and for us to deliver updated versions
              back to you, so the pressure&apos;s off. Unless you&apos;re on a particularly tight deadline, in which case, scrap
              all of the above, WE NEED TO KNOW NOW :)
            </p>
          </div>
        </article>

        <img
          src={asset("works/works-meeting.png")}
          alt="Two people reviewing a creative project at a desk"
          className="absolute left-[826px] top-[860px] h-[449px] w-[614px] object-cover max-lg:static max-lg:order-3 max-lg:mt-[24px] max-lg:aspect-[253/151] max-lg:h-auto max-lg:w-full wide:left-[1202px] wide:top-[769px] wide:h-[529px] wide:w-[718px]"
        />
      </div>
    </section>
  );
}
