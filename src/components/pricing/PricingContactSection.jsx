import React, { useState } from "react";

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-[14px] block whitespace-nowrap text-[24px] font-extrabold leading-none tracking-[-1.2px] text-black mobile:mb-2 mobile:text-[12px] mobile:tracking-[-0.4px] desktop:mb-[10px] desktop:text-[14px] desktop:tracking-[-0.5px] wide:mb-[14px] wide:text-[24px] wide:tracking-[-1.2px]">
        {label}
        {required ? <span className="text-[#ff4b4b]"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "h-[74px] w-full border-0 bg-white px-[31px] text-[24px] font-medium tracking-[-1.2px] text-black placeholder:text-black/75 mobile:h-[30px] mobile:px-3 mobile:text-[10px] mobile:tracking-[-0.2px] desktop:h-[52px] desktop:px-5 desktop:text-[16px] desktop:tracking-[-0.6px] wide:h-[74px] wide:px-[31px] wide:text-[24px] wide:tracking-[-1.2px]";

export function PricingContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden border-t-[4px] border-pocket-blue bg-pocket-canvas mobile:h-auto mobile:py-[54px] desktop:h-[586px] wide:h-[820px]">
      <div className="relative mx-auto h-full max-w-[1920px] px-6 mobile:max-w-[430px] desktop:px-20 wide:px-0">
        <div className="mobile:mb-8 desktop:absolute desktop:left-[80px] desktop:top-[145px] wide:absolute wide:left-[268px] wide:top-[212px]">
          <h2 className="text-[80px] font-extrabold leading-none tracking-[-4px] text-pocket-blue mobile:text-[34px] mobile:tracking-[-1.7px] desktop:text-[64px] desktop:tracking-[-3.2px] wide:text-[88px] wide:tracking-[-4.4px]">
            Get In Touch
          </h2>
          <p className="mt-[44px] max-w-[520px] text-[48px] font-medium leading-none tracking-[-2.4px] text-pocket-muted mobile:mt-4 mobile:text-[18px] mobile:leading-[1.08] mobile:tracking-[-0.8px] desktop:mt-8 desktop:max-w-[400px] desktop:text-[37px] desktop:tracking-[-1.7px] wide:max-w-[550px] wide:text-[48px] wide:tracking-[-2.4px]">
            Drop us a mail, let us know your budget, and we&apos;ll share what we can offer
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="mobile:w-full desktop:absolute desktop:left-[570px] desktop:top-[130px] desktop:w-[790px] wide:absolute wide:left-[860px] wide:top-[172px] wide:w-[890px]"
        >
          <div className="grid grid-cols-3 gap-[22px] mobile:grid-cols-1 mobile:gap-3 desktop:gap-[22px]">
            <Field label="What's your name?" required>
              <input className={inputClass} placeholder="John Doe" name="name" />
            </Field>
            <Field label="Your email address?" required>
              <input className={inputClass} type="email" placeholder="johndoe@example.com" name="email" />
            </Field>
            <Field label="Your contact number?" required>
              <input className={inputClass} name="phone" />
            </Field>
          </div>

          <Field label="How can we help?" required className="mt-[28px]">
            <textarea
              className="h-[178px] w-full resize-none border-0 bg-white px-[60px] py-[58px] text-[24px] font-medium leading-[1.4] tracking-[-1.2px] text-black placeholder:text-black/75 mobile:h-[90px] mobile:px-3 mobile:py-3 mobile:text-[10px] mobile:tracking-[-0.2px] desktop:h-[164px] desktop:px-[46px] desktop:py-[48px] desktop:text-[16px] desktop:tracking-[-0.6px] wide:h-[178px] wide:px-[60px] wide:py-[58px] wide:text-[24px] wide:tracking-[-1.2px]"
              name="message"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum."
            />
          </Field>

          <button
            type="submit"
            className="ml-auto mt-[24px] flex h-[54px] w-[188px] items-center justify-center rounded-[14px] bg-pocket-yellow text-[24px] font-extrabold leading-none tracking-[-1.2px] text-black transition hover:bg-pocket-blue hover:text-white mobile:h-[36px] mobile:w-full mobile:text-[14px] desktop:h-[46px] desktop:w-[150px] desktop:text-[16px] wide:h-[54px] wide:w-[188px] wide:text-[24px]"
          >
            Send
          </button>
          {sent ? <p className="mt-3 text-right text-[16px] font-semibold text-pocket-muted">Thanks, we&apos;ll be in touch.</p> : null}
        </form>
      </div>
    </section>
  );
}
