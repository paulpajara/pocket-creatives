import React, { useState } from "react";
import { Linkedin } from "lucide-react";
import { directors } from "../data/siteContent";
import { cn } from "../utils/cn";
import { StickerButton } from "./StickerButton";

const wideTeamTabs = ["Steven", "Haider", "Lauren", "Ned", "Connor", "Rauchan"];

export function TeamSection({ onContactClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDirector = directors[activeIndex];

  return (
    <section className="bg-pocket-canvas py-20 max-lg:h-[847px] max-lg:py-0 lg:h-[1129px] lg:pb-[178px] lg:pt-[211px] wide:h-[965px] wide:border-t-[3px] wide:border-pocket-yellow wide:py-0">
      <div className="relative mx-auto h-full w-[390px] max-w-[calc(100vw-40px)] lg:hidden">
        <h2 className="absolute left-0 top-10 text-[40px] font-extrabold leading-none tracking-[-2px] text-pocket-muted">
          Meet the Team
        </h2>
        <div className="absolute left-0 top-[120px] flex h-10 w-[390px] justify-between">
          {directors.map((director, index) => (
            <button
              key={director.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex h-10 w-[103px] items-center justify-center rounded-xl text-[20px] font-medium leading-none tracking-[-1px]",
                index === activeIndex ? "bg-pocket-yellow text-white" : "text-pocket-muted"
              )}
            >
              {director.name}
            </button>
          ))}
        </div>

        <div className="absolute left-0 top-[200px] h-[607px] w-[390px] overflow-hidden text-left">
          <img
            src={activeDirector.image}
            alt={`${activeDirector.name} ${activeDirector.surname}`}
            className="absolute left-0 top-0 h-[227px] w-[195px] rounded-md object-cover"
          />
          <h3 className="absolute left-[215px] top-0 w-[175px] text-[50px] font-extrabold leading-none tracking-[-4px] text-pocket-yellow">
            {activeDirector.name}{" "}
            <span className="block text-[30px] leading-none text-pocket-blue">{activeDirector.surname}</span>
          </h3>
          <div
            className={cn(
              "absolute left-0 top-[267px] flex w-[390px] flex-wrap gap-x-5 gap-y-[10px] text-[20px] font-extrabold leading-none tracking-[-1px]",
              activeIndex === 0 ? "text-pocket-muted" : "text-black"
            )}
          >
            {activeDirector.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <p className="absolute left-0 top-[387px] w-[390px] text-[20px] font-medium leading-[1.5] tracking-[-1px] text-pocket-muted">
            {activeDirector.copy}
          </p>
          <StickerButton
            label={`Msg ${activeDirector.name}`}
            onClick={onContactClick}
            className="absolute left-[215px] top-[153px] !h-16 !w-16 !text-[15px]"
          />
          <a
            href={activeDirector.linkedin || "#"}
            target={activeDirector.linkedin && activeDirector.linkedin !== "#" ? "_blank" : undefined}
            rel={activeDirector.linkedin && activeDirector.linkedin !== "#" ? "noreferrer" : undefined}
            className="absolute left-[309px] top-[153px] inline-flex h-16 w-16 items-center justify-center text-pocket-muted"
            aria-label={`${activeDirector.name} LinkedIn`}
          >
            <Linkedin className="h-[54px] w-[54px] fill-current stroke-current" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="section-shell hidden lg:block wide:hidden">
        <div className="mb-[60px] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold leading-none tracking-[-2px] sm:text-[40px]">Meet the Team</h2>
          <div className="flex flex-wrap gap-3">
            {directors.map((director, index) => (
              <button
                key={director.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-10 w-[103px] rounded-xl px-5 text-[20px] font-medium leading-none tracking-[-1px] transition",
                  index === activeIndex ? "bg-pocket-yellow text-white" : "bg-white text-pocket-ink hover:bg-pocket-paper"
                )}
              >
                {director.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid min-h-[640px] gap-10 lg:grid-cols-[550px_579px] lg:gap-[97px]" data-node-id="1:1286">
          <img
            src={activeDirector.image}
            alt={`${activeDirector.name} ${activeDirector.surname}`}
            className="h-[420px] w-full rounded-xl object-cover lg:h-[640px] lg:w-[550px]"
          />
          <div className="pt-2 lg:pt-10">
            <h3 className="text-[56px] font-extrabold leading-none tracking-[-4px] text-pocket-yellow sm:text-[80px]">
              {activeDirector.name}{" "}
              <span className="text-[32px] text-pocket-blue sm:text-[40px]">{activeDirector.surname}</span>
            </h3>
            <div className="mt-8 flex max-w-[579px] flex-wrap gap-x-5 gap-y-3 text-[20px] font-extrabold leading-none tracking-[-1px] text-black">
              {activeDirector.roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <p className="mt-10 max-w-[579px] text-[20px] font-medium leading-[2] tracking-[-1px] text-pocket-muted">
              {activeDirector.copy}
            </p>
            <div className="mt-14 flex items-center gap-14 sm:ml-[132px]">
              <StickerButton label={`Msg ${activeDirector.name}`} onClick={onContactClick} />
              <a
                href={activeDirector.linkedin || "#"}
                className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-pocket-muted transition hover:bg-pocket-paper hover:text-pocket-blue"
                aria-label={`${activeDirector.name} LinkedIn`}
              >
                <Linkedin className="h-12 w-12 fill-current stroke-current" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <h2 className="absolute left-[277px] top-[128px] text-[40px] font-extrabold leading-none tracking-[-2px] text-pocket-muted">
          Meet the Team
        </h2>

        <div className="absolute left-[960px] top-[127px] flex h-10 items-center gap-[63px]">
          {wideTeamTabs.slice(0, 3).map((name, index) => {
            const directorIndex = directors.findIndex((director) => director.name === name);
            const isActive = index === activeIndex;
            return (
              <button
                key={name}
                type="button"
                onClick={directorIndex >= 0 ? () => setActiveIndex(directorIndex) : undefined}
                className={cn(
                  "h-10 w-[103px] rounded-xl text-[20px] font-medium leading-none tracking-[-1px]",
                  isActive ? "bg-pocket-yellow text-white" : "text-pocket-muted"
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
        <div className="absolute left-[1073px] top-[199px] flex h-10 items-center gap-[50px]">
          {wideTeamTabs.slice(3).map((name) => (
            <button
              key={name}
              type="button"
              className="h-10 rounded-xl px-5 text-[20px] font-medium leading-none tracking-[-1px] text-pocket-muted"
              aria-disabled="true"
            >
              {name}
            </button>
          ))}
        </div>

        <img
          src={activeDirector.image}
          alt={`${activeDirector.name} ${activeDirector.surname}`}
          className="absolute left-[277px] top-[227px] h-[640px] w-[550px] rounded-xl object-cover"
        />

        <div className="absolute left-[963px] top-[278px] w-[560px] text-left">
          <h3 className="text-[80px] font-extrabold leading-none tracking-[-4px] text-pocket-yellow">
            {activeDirector.name}{" "}
            <span className="text-[40px] text-pocket-blue">{activeDirector.surname}</span>
          </h3>
          <div className="mt-[43px] flex max-w-[579px] flex-wrap gap-x-5 gap-y-5 text-[20px] font-extrabold leading-none tracking-[-1px] text-pocket-muted">
            {activeDirector.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <p className="mt-[48px] max-w-[579px] text-[20px] font-medium leading-[2] tracking-[-1px] text-pocket-muted">
            {activeDirector.copy}
          </p>
        </div>

        <StickerButton
          label={`Msg ${activeDirector.name}`}
          onClick={onContactClick}
          className="absolute left-[1125px] top-[708px] h-20 w-20 !text-[20px]"
        />
        <a
          href={activeDirector.linkedin || "#"}
          className="absolute left-[1271px] top-[722px] inline-flex h-16 w-16 items-center justify-center rounded-lg text-pocket-muted transition hover:bg-pocket-paper hover:text-pocket-blue"
          aria-label={`${activeDirector.name} LinkedIn`}
        >
          <Linkedin className="h-12 w-12 fill-current stroke-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
