import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset, navItems, socials } from "../data/siteContent";
import { cn } from "../utils/cn";
import { PillButton } from "./PillButton";

export function Header({ onContactClick, activeLabel = "Home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const contactIsActive = activeLabel === "Contact";

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4 lg:top-6">
      <div className="relative z-50 mx-auto flex h-[83px] w-full max-w-[390px]
                      items-center justify-between rounded-[26px] bg-white
                      px-[42px] shadow-soft
                      sm:max-w-[913px] sm:px-7
                      lg:h-[72px] lg:w-fit lg:max-w-none
                      lg:justify-start lg:px-8">

        <a href="/" className="flex items-center" aria-label="Pocket Creatives home" onClick={closeMenu}>
          <img
            src={asset("logo.png")}
            alt="Pocket Creatives"
            className="h-[50px] w-[100px] object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-3 lg:ml-4 lg:flex" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <PillButton
              key={item.href}
              as="a"
              href={item.href}
              variant={item.label === activeLabel ? "yellow" : "ghost"}
            >
              {item.label}
            </PillButton>
          ))}
          <PillButton
            as="a"
            href="/contact/"
            variant={contactIsActive ? "yellow" : "blue"}
            onClick={closeMenu}
          >
            Contact
          </PillButton>
          <a
            href="https://wa.me/442036338494"
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full text-pocket-ink transition hover:bg-pocket-yellow"
            aria-label="Message Pocket Creatives on WhatsApp"
          >
            <img src={asset("icon-whatsapp.svg")} alt="" className="h-6 w-6" />
          </a>
        </nav>

        <div className="flex items-center gap-[42px] lg:hidden">
          <a
            href="https://wa.me/442036338494"
            className="inline-flex h-[34px] w-[34px] items-center justify-center text-pocket-muted"
            aria-label="Message Pocket Creatives on WhatsApp"
          >
            <img src={asset("icon-whatsapp.svg")} alt="" className="h-[34px] w-[34px]" />
          </a>
        <button
          type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center transition-colors",
              menuOpen ? "text-pocket-blue" : "text-pocket-yellow"
            )}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
            {menuOpen ? <X className="h-7 w-7 stroke-[2.5]" /> : <Menu className="h-10 w-10 stroke-[3]" />}
        </button>
      </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-dvh overflow-hidden bg-pocket-canvas pt-[166px] transition-opacity duration-200 lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-[102px] items-center justify-center border-t border-pocket-yellow text-[24px] font-medium leading-none tracking-[-1.2px] text-black transition-colors hover:text-pocket-yellow"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact/"
            className="flex h-[102px] w-full items-center justify-center border-y border-pocket-yellow text-[24px] font-medium leading-none tracking-[-1.2px] text-black transition-colors hover:text-pocket-yellow"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>

        <div className="mx-auto mt-[46px] flex w-[300px] flex-wrap items-center justify-center gap-x-[34px] gap-y-[25px]">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="inline-flex h-7 items-center justify-center transition-opacity hover:opacity-70"
              style={{ width: social.width }}
              aria-label={social.label}
            >
              <img src={social.icon} alt="" className="mobile-menu-social-icon h-7 w-full object-contain" />
            </a>
          ))}
        </div>

        <p className="mt-[36px] text-center text-[20px] font-extrabold leading-[1.1] tracking-[-1px] text-black">
          Pocket Creatives
          <br />
          <span className="text-pocket-blue">Video Production &amp; Photography</span>
        </p>
      </div>
    </header>
  );
}
