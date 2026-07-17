import React, { useState } from "react";
import { asset, socials } from "../data/siteContent";

const footerLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about/" },
  { label: "WORKS", href: "/work/" },
  { label: "SERVICES", href: "/services/" },
  { label: "PRICING", href: "/pricing/" },
  { label: "CONTACT", href: "/contact/" },
  { label: "BLOGS", href: "/blogs/" }
];

const wideLinks = [
  ...footerLinks,
  { label: "PHOTOGRAPHY TESTIMONIALS", href: "#" },
  { label: "VIDEOGRAPHY TESTIMONIALS", href: "#" }
];

const textLinkHover = "transition-colors duration-200 hover:text-pocket-yellow focus-visible:text-pocket-yellow";

function NewsletterFields({ idPrefix, inputClassName, buttonClassName, subscribed, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        id={`${idPrefix}-newsletter-email`}
        type="email"
        required
        placeholder="Your Email Address"
        className={inputClassName}
      />
      <button type="submit" className={buttonClassName}>
        Subscribe
      </button>
      {subscribed ? <p className="absolute text-xs text-white/85">Thanks, you are on the list.</p> : null}
    </form>
  );
}

function SocialLinks({ className, responsive = false }) {
  return (
    <div className={className}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className={responsive ? "inline-flex h-[1.25vw] shrink-0 items-center" : "inline-flex h-6 shrink-0 items-center"}
          style={{ width: responsive ? `${(social.width / 1920) * 100}vw` : social.width }}
          aria-label={social.label}
        >
          <img
            src={social.icon}
            alt=""
            className={responsive ? "h-[1.25vw] w-full brightness-0 invert" : "h-6 w-full brightness-0 invert"}
          />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="h-[1229px] bg-pocket-blue text-white lg:h-[806px] wide:h-[807px]">
      <div className="relative mx-auto hidden h-full w-full max-w-none lg:block wide:hidden">
        <h2 className="absolute left-[8vw] top-[92px] w-[900px] text-[60px] font-semibold leading-none tracking-[-3px]">
          We love talking about what we
          <br />
          do, so if you have a project,
          <br />
          get in touch.
        </h2>

        <a
          href="mailto:team@pocketcreatives.co.uk"
          className={`absolute left-[8vw] top-[342px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black underline ${textLinkHover}`}
        >
          team@pocketcreatives.co.uk
        </a>
        <a
          href="https://maps.google.com/maps?z=16&q=wow%2Bworkspaces%2Bbattersea%2Bunit%2B3%2C%2B7-9%2Bingate%2Bplace%2Bbattersea%2C%2Blondon%2Bsw8%2B3ns"
          className={`absolute left-[40.5vw] top-[342px] text-[30px] font-extrabold leading-[1.35] tracking-[-1.5px] text-black underline ${textLinkHover}`}
          target="_blank"
          rel="noreferrer"
        >
          Wow Workspaces Battersea
          <br />
          Unit 3, 7-9 Ingate Place
          <br />
          Battersea, London SW8 3NS
        </a>
        <a
          href="tel:+442036338494"
          className={`absolute left-[8vw] top-[426px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black ${textLinkHover}`}
        >
          020 3633 8494
        </a>

        <p className="absolute left-[8vw] top-[498px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">
          Sign up to our Newsletter
        </p>
        <NewsletterFields
          idPrefix="desktop"
          subscribed={subscribed}
          onSubmit={handleNewsletter}
          inputClassName="absolute left-[8vw] top-[530px] h-[45px] w-[404px] border border-black bg-white px-3 text-[16px] font-medium tracking-[-0.8px] text-pocket-ink placeholder:text-pocket-muted"
          buttonClassName={`absolute left-[40.5vw] top-[552px] text-[20px] font-medium leading-none tracking-[-1px] underline ${textLinkHover}`}
        />

        <div className="absolute left-0 top-[604px] h-px w-full bg-white/45" />
        <div className="absolute left-0 top-[735px] h-px w-full bg-white/45" />

        <p className="absolute left-[8vw] top-[635px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black">
          QuickLinks
        </p>
        <nav className="absolute left-[8vw] top-[690px] flex h-11 w-[760px] flex-wrap gap-[32px]" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} className={`text-[20px] font-medium leading-[1.2] tracking-[-1px] ${textLinkHover}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute left-[1125px] top-[630px] flex h-[78px] w-[196px] items-center justify-center rounded-3xl bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
          <img src={asset("logo.png")} alt="Pocket Creatives" className="h-[60px] w-[120px] object-cover object-left" />
        </div>

        <SocialLinks className="absolute left-[8vw] top-[760px] flex h-6 w-[406px] items-center gap-8" />
        <p className="absolute left-[69.5vw] top-[760px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">
          Designed &amp; Built By SeekSocial 2024
        </p>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <h2 className="absolute left-[360px] top-[80px] w-[888px] text-[64px] font-semibold leading-none tracking-[-3.2px]">
          We&apos;d love to chat about how we can help you with your next project, get in touch!
        </h2>

        <a
          href="mailto:team@pocketcreatives.co.uk"
          className={`absolute left-[350px] top-[326px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black underline ${textLinkHover}`}
        >
          team@pocketcreatives.co.uk
        </a>
        <a
          href="https://maps.google.com/maps?z=16&q=wow%2Bworkspaces%2Bbattersea%2Bunit%2B3%2C%2B7-9%2Bingate%2Bplace%2Bbattersea%2C%2Blondon%2Bsw8%2B3ns"
          className={`absolute left-[811px] top-[320px] text-[30px] font-extrabold leading-[1.4] tracking-[-1.5px] text-black underline ${textLinkHover}`}
          target="_blank"
          rel="noreferrer"
        >
          Wow Workspaces Battersea
          <br />
          Unit 3, 7-9 Ingate Place
          <br />
          Battersea, London SW8 3NS
        </a>
        <a
          href="tel:+442036338494"
          className={`absolute left-[360px] top-[420px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black ${textLinkHover}`}
        >
          020 3633 8494
        </a>

        <p className="absolute left-[360px] top-[490px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">
          Sign up to our Newsletter
        </p>
        <NewsletterFields
          idPrefix="wide"
          subscribed={subscribed}
          onSubmit={handleNewsletter}
          inputClassName="absolute left-[360px] top-[522px] h-[45px] w-[404px] border border-black bg-white px-3 text-[16px] font-medium tracking-[-0.8px] text-pocket-ink placeholder:text-pocket-muted"
          buttonClassName={`absolute left-[810px] top-[523px] text-[20px] font-medium leading-[1.2] tracking-[-1px] underline ${textLinkHover}`}
        />

        <div className="absolute left-0 top-[604px] h-px w-[1920px] bg-white/25" />
        <div className="absolute left-0 top-[730px] h-px w-[1920px] bg-white/25" />

        <p className="absolute left-[360px] top-[628px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black">
          QuickLinks
        </p>
        <nav className="absolute left-[350px] top-[672px] flex h-11 w-[1532px] flex-wrap gap-5" aria-label="Footer navigation">
          {wideLinks.map((item) => (
            <a key={item.label} href={item.href} className={`p-[10px] text-[20px] font-medium leading-[1.2] tracking-[-1px] ${textLinkHover}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute left-[1686px] top-[502px] flex h-[77px] w-[196px] items-center justify-center rounded-3xl bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
          <img src={asset("logo.png")} alt="Pocket Creatives" className="h-[60px] w-[120px] object-cover object-left" />
        </div>

        <SocialLinks className="absolute left-[360px] top-[754px] flex h-6 w-[406px] items-center gap-8" />
        <p className="absolute left-[1241px] top-[754px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">
          Designed &amp; Built By Seek Marketing Partners 2025
        </p>
      </div>

      <div className="relative mx-auto h-full w-[430px] max-w-full lg:hidden">
        <h2 className="absolute left-5 top-[68px] w-[390px] text-[32px] font-semibold leading-none tracking-[-1.6px]">
          We love talking about what we do, so if you have a project, get in touch.
        </h2>
        <a
          href="mailto:team@pocketcreatives.co.uk"
          className={`absolute left-5 top-[206px] w-[404px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black underline ${textLinkHover}`}
        >
          team
          <br />
          @pocketcreatives.co.uk
        </a>
        <a
          href="https://maps.google.com/maps?z=16&q=wow%2Bworkspaces%2Bbattersea%2Bunit%2B3%2C%2B7-9%2Bingate%2Bplace%2Bbattersea%2C%2Blondon%2Bsw8%2B3ns"
          className={`absolute left-5 top-[310px] w-[390px] text-[30px] font-extrabold leading-[1.4] tracking-[-1.5px] text-black underline ${textLinkHover}`}
          target="_blank"
          rel="noreferrer"
        >
          Wow Workspaces Battersea
          <br />
          Unit 3, 7-9 Ingate Place
          <br />
          Battersea, London SW8 3NS
        </a>
        <a href="tel:+442036338494" className={`absolute left-5 top-[471px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black ${textLinkHover}`}>
          020 3633 8494
        </a>

        <p className="absolute left-5 top-[560px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">Sign up to our Newsletter</p>
        <NewsletterFields
          idPrefix="mobile"
          subscribed={subscribed}
          onSubmit={handleNewsletter}
          inputClassName="absolute left-5 top-[596px] h-[45px] w-[390px] border border-black bg-white px-[10px] text-[16px] font-medium tracking-[-0.8px] text-pocket-ink placeholder:text-pocket-muted"
          buttonClassName={`absolute left-5 top-[671px] text-[20px] font-medium leading-none tracking-[-1px] underline ${textLinkHover}`}
        />

        <div className="absolute left-0 top-[728px] h-px w-[430px] bg-white/25" />
        <div className="absolute left-0 top-[1027px] h-px w-[430px] bg-white/25" />
        <p className="absolute left-5 top-[752px] text-[30px] font-extrabold leading-none tracking-[-1.5px] text-black">QuickLinks</p>
        <nav className="absolute left-5 top-[807px] flex w-[390px] flex-wrap gap-x-5 gap-y-5" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} className={`text-[20px] font-medium leading-[1.2] tracking-[-1px] ${textLinkHover}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute left-[118px] top-[910px] flex h-[78px] w-[196px] items-center justify-center rounded-3xl bg-white">
          <img src={asset("logo.png")} alt="Pocket Creatives" className="h-[60px] w-[120px] object-cover object-left" />
        </div>

        <SocialLinks className="absolute left-5 top-[1067px] flex w-[370px] flex-wrap items-center gap-x-8 gap-y-[25px]" />
        <p className="absolute left-5 top-[1170px] text-[20px] font-medium leading-[1.2] tracking-[-1px]">
          Designed &amp; Built By SeekSocial 2024
        </p>
      </div>
    </footer>
  );
}
