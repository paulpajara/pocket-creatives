import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

function IntroTitle({ lines, className }) {
  return (
    <h1 className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </h1>
  );
}

function IntroLinks({ panel, variant, className }) {
  return (
    <nav className={className} aria-label={`${panel.label} section links`}>
      <p className="mb-6 lg:mb-5">Go to...</p>
      <div className="grid gap-6 lg:gap-5">
        {panel.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn("group inline-flex items-center gap-3 transition-colors", variant.link)}
          >
            <ArrowRight className="h-6 w-6 text-black transition-transform group-hover:translate-x-1 lg:h-4 lg:w-4" />
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function IntroPanel({
  panel,
  mobileStyles,
  sizeStyles,
  variantStyles,
  fallbackMobileId,
  fallbackSize = "feature",
  fallbackVariant = "yellow"
}) {
  const variant = variantStyles[panel.variant] || variantStyles[fallbackVariant];
  const size = sizeStyles[panel.size] || sizeStyles[fallbackSize];
  const mobile = mobileStyles[panel.id] || mobileStyles[fallbackMobileId];
  const mobileTitle = panel.mobileTitle || panel.title;

  return (
    <section id={panel.id} className={cn("relative overflow-hidden", variant.section, size.section)}>
      <div className={cn("h-full w-full px-6 lg:hidden", mobile.inner)}>
        <IntroTitle
          lines={mobileTitle}
          className={cn(
            "w-full max-w-full break-words text-[62px] font-extrabold leading-[1.01] tracking-[-3.4px] text-white [overflow-wrap:anywhere]",
            mobile.title
          )}
        />

        <p
          className={cn(
            "max-w-[440px] text-[24px] font-medium leading-[1.43] tracking-[-1.2px]",
            variant.copy,
            mobile.copy
          )}
        >
          {panel.copy}
        </p>

        <IntroLinks
          panel={panel}
          variant={variant}
          className={cn(
            "w-[260px] text-[24px] font-extrabold leading-none",
            variant.copy,
            mobile.links
          )}
        />
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] px-6 pt-0 md:px-20 lg:block lg:pt-[210px] desktop:px-0 desktop:pt-0 wide:px-0 wide:pt-0">
        <IntroTitle
          lines={panel.title}
          className={cn(
            "max-w-[1100px] text-[64px] font-extrabold leading-[0.96] tracking-[-3.5px] md:text-[94px] desktop:absolute desktop:max-w-[1040px] wide:absolute",
            variant.title,
            size.title,
            size.titleText
          )}
        />

        <p
          className={cn(
            "mt-12 max-w-[560px] text-[20px] font-medium leading-[2] tracking-[-0.5px] desktop:absolute desktop:mt-0 wide:absolute wide:mt-0 wide:w-[600px]",
            variant.copy,
            size.body
          )}
        >
          {panel.copy}
        </p>

        <IntroLinks
          panel={panel}
          variant={variant}
          className={cn(
            "mt-12 w-[240px] text-[24px] font-extrabold leading-none desktop:absolute desktop:mt-0 wide:absolute wide:mt-0",
            variant.copy,
            size.links
          )}
        />
      </div>
    </section>
  );
}
