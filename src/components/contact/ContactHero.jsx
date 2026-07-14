import React, { useState } from "react";
import { Mail } from "lucide-react";
import { contactPage } from "../../data/siteContent";

function RequiredMark() {
  return <span className="text-[#ff4b4b]"> *</span>;
}

function Field({ label, required = false, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-[10px] block whitespace-nowrap text-[16px] font-extrabold leading-none tracking-[-0.6px] text-white desktop:text-[16px] wide:mb-[14px] wide:text-[20px] wide:tracking-[-1px]">
        {label}
        {required ? <RequiredMark /> : null}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "h-[52px] w-full border-0 bg-[#d9d9d9] px-5 text-[16px] font-medium tracking-[-0.6px] text-black outline-none placeholder:text-black/70 wide:h-[73px] wide:bg-white wide:px-[30px] wide:text-[20px] wide:tracking-[-1px]";

export function ContactHero({ onMessageClick }) {
  const [sent, setSent] = useState(false);
  const { hero } = contactPage;

  return (
    <section className="relative overflow-hidden bg-pocket-blue text-white mobile:h-[778px] mobile:px-6 mobile:pt-[152px] desktop:h-[925px] wide:h-[1072px]">
      <div className="relative mx-auto h-full max-w-[1920px]">
        <div className="desktop:absolute desktop:left-[123px] desktop:top-[217px] wide:absolute wide:left-[249px] wide:top-[318px]">
          <h1 className="max-w-[636px] text-[60px] font-extrabold leading-[0.95] tracking-[-2.4px] mobile:max-w-[360px] desktop:text-[120px] desktop:tracking-[-6px] wide:text-[120px] wide:tracking-[-6px]">
            {hero.title}
          </h1>
          <div className="mt-[30px] max-w-[360px] space-y-[17px] text-[14px] font-light leading-[1.28] tracking-[-0.45px] text-white mobile:text-[20px] mobile:font-normal desktop:mt-[56px] desktop:max-w-[599px] desktop:space-y-[20px] desktop:text-[20px] desktop:tracking-[-1px] wide:text-[18px] wide:max-w-[599px] wide:mt-[76px]">
            {hero.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <button
            type="button"
            onClick={onMessageClick}
            className="mx-auto mt-[48px] flex h-[54px] items-center justify-center gap-[12px] rounded-[11px] bg-pocket-yellow px-[25px] text-[13px] font-extrabold leading-none tracking-[-0.4px] text-black shadow-[0_22px_34px_rgba(0,0,0,0.26)] transition hover:bg-white desktop:hidden wide:hidden"
          >
            <Mail className="h-[19px] w-[19px] stroke-[2.7]" />
            Message us!
          </button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="hidden desktop:absolute desktop:left-[817px] desktop:top-[277px] desktop:block desktop:w-[503px] wide:absolute wide:left-[954px] wide:top-[319px] wide:block wide:w-[738px]"
        >
          <div className="grid grid-cols-3 gap-[17px] wide:gap-[22px]">
            <Field label="What's your name?" required>
              <input className={inputClass} name="name" defaultValue="John Doe" required />
            </Field>

            <Field label="Your email address?" required>
              <input
                className={inputClass}
                name="email"
                type="email"
                defaultValue="johndoe@example.com"
                required
              />
            </Field>

            <Field label="Your contact number?" required>
              <input className={inputClass} name="phone" type="tel" required />
            </Field>
          </div>

          <Field label="How can we help?" required className="mt-[26px] wide:mt-[34px]">
            <textarea
              className="h-[363px] w-full resize-none border-0 bg-[#d9d9d9] px-[60px] py-[50px] text-[14px] font-medium leading-[1.42] tracking-[-0.6px] text-black outline-none wide:h-[395px] wide:bg-white wide:px-[60px] wide:py-[58px] wide:text-[20px] wide:tracking-[-1px]"
              name="message"
              defaultValue={hero.formMessage}
              required
            />
          </Field>

          <button
            type="submit"
            className="ml-auto mt-[24px] flex h-[31px] w-[120px] items-center justify-center rounded-none bg-pocket-yellow text-[14px] font-extrabold leading-none tracking-[-0.4px] text-black shadow-button transition hover:bg-white mobile:text-[20px] mobile:h-[120px] mobile:w-[120px] wide:mt-[29px] wide:h-[54px] wide:w-[188px] wide:rounded-[16px] wide:text-[20px]"
          >
            Send
          </button>
          {sent ? <p className="mt-4 text-right text-[16px] font-semibold text-white">Thanks, we'll be in touch.</p> : null}
        </form>
      </div>
    </section>
  );
}
