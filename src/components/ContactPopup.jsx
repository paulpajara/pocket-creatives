import React, { useState } from "react";
import { X } from "lucide-react";
import { ModalShell } from "./ModalShell";

function Field({ label, name, type = "text", textarea = false }) {
  const Input = textarea ? "textarea" : "input";

  return (
    <label className="grid gap-2 text-[22px] font-medium leading-none text-black lg:gap-[7px] lg:text-[16px]">
      {label}
      <Input
        className={
          textarea
            ? "h-[96px] resize-none border border-black bg-white px-2 py-3 text-[17px] font-normal text-pocket-muted outline-none lg:h-[69px] lg:py-2 lg:text-[12px]"
            : "h-[50px] border border-black bg-white px-2 text-[17px] font-normal text-pocket-muted outline-none lg:h-[34px] lg:text-[12px]"
        }
        name={name}
        type={textarea ? undefined : type}
        placeholder={label.replace("*", "")}
        required={label.includes("*")}
      />
    </label>
  );
}

export function ContactPopup({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      titleId="contact-popup-title"
      className="items-start overflow-y-auto bg-[#1f1f1f] px-0 py-[46px] lg:items-center lg:py-0"
      panelClassName="mt-0 h-[909px] max-h-[calc(100dvh-48px)] w-[450px] max-w-[calc(100vw-48px)] overflow-y-auto rounded-[10px] !bg-pocket-blue shadow-soft lg:h-[490px] lg:w-[914px] lg:max-w-[914px] lg:overflow-hidden lg:rounded-lg"
      showCloseButton={false}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-[31px] top-[31px] z-10 text-black lg:right-[12px] lg:top-[12px]"
        aria-label="Close popup"
      >
        <X className="h-7 w-7 stroke-[2.5]" />
      </button>

      <div className="relative min-h-full w-full px-[23px] pb-[30px] pt-[72px] lg:h-full lg:p-0">
        <h2
          id="contact-popup-title"
          className="w-full text-[42px] font-extrabold leading-[1.05] text-white lg:absolute lg:left-[92px] lg:top-[64px] lg:w-[360px] lg:text-[60px] lg:leading-[1.02]"
        >
          Have a project you want to discuss?
        </h2>

        <div className="mt-5 flex w-full gap-[21px] lg:absolute lg:left-[92px] lg:top-[340px] lg:mt-0 lg:w-[360px] lg:gap-[17px]">
          <span className="mt-1 h-4 w-4 shrink-0 border border-black bg-white lg:h-3 lg:w-3" aria-hidden="true" />
          <p className="text-[22px] font-medium leading-[1.15] text-black lg:text-[16px] lg:leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid w-full gap-[14px] lg:absolute lg:left-[526px] lg:top-[63px] lg:mt-0 lg:w-[297px] lg:gap-[13px]"
        >
          <Field label="Full Name*" name="name" />
          <Field label="Contact Number*" name="phone" type="tel" />
          <Field label="Email Address*" name="email" type="email" />
          <Field label="Message" name="message" textarea />
          <button
            type="submit"
            className="ml-auto mt-[10px] h-[45px] w-[119px] rounded-[10px] bg-pocket-yellow text-[24px] font-medium leading-none text-black lg:mt-[18px] lg:h-[30px] lg:w-[78px] lg:text-[14px] lg:text-white"
          >
            Send
          </button>
          {submitted ? <p className="text-sm font-semibold text-white">Thanks, we&apos;ll be in touch.</p> : null}
        </form>
      </div>
    </ModalShell>
  );
}
