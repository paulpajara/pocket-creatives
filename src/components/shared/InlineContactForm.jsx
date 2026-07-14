import React, { useState } from "react";

export function InlineContactForm({ mobile = false, className = "" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (mobile) {
    return (
      <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
        <label className="block text-[14px] font-medium leading-none text-black">
          Full Name<span className="text-[#ea4335]">*</span>
        </label>
        <input
          name="name"
          required
          placeholder="Full Name"
          className="mt-[8px] h-[29px] w-full bg-white px-2 text-[12px] font-normal text-pocket-muted outline outline-1 outline-black"
        />

        <label className="mt-[14px] block text-[14px] font-medium leading-none text-black">
          Contact Number<span className="text-[#ea4335]">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="Contact Number"
          className="mt-[8px] h-[29px] w-full bg-white px-2 text-[12px] font-normal text-pocket-muted outline outline-1 outline-black"
        />

        <label className="mt-[14px] block text-[14px] font-medium leading-none text-black">
          Email Address<span className="text-[#ea4335]">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="mt-[8px] h-[29px] w-full bg-white px-2 text-[12px] font-normal text-pocket-muted outline outline-1 outline-black"
        />

        <label className="mt-[14px] block text-[14px] font-medium leading-none text-black">Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className="mt-[8px] h-[80px] w-full resize-none bg-white px-2 py-2 text-[12px] font-normal text-pocket-muted outline outline-1 outline-black"
        />

        <button
          type="submit"
          className="mt-[16px] h-[34px] w-full rounded-[4px] bg-pocket-blue text-[14px] font-extrabold text-white shadow-button transition hover:bg-black"
        >
          Send
        </button>
        {submitted ? <p className="mt-3 text-[14px] font-extrabold text-black">Thanks, we&apos;ll be in touch.</p> : null}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative h-[488px] w-[503px] max-lg:h-auto max-lg:w-full wide:h-[661px] wide:w-[738px] ${className}`}>
      <label className="absolute left-0 top-[10px] whitespace-nowrap text-[16px] font-extrabold leading-none text-black max-lg:static max-lg:text-[10px] wide:text-[20px]">
        What&apos;s your name? <span className="text-[#ea4335]">*</span>
      </label>
      <input
        name="name"
        required
        defaultValue="John Doe"
        className="absolute left-0 top-[37px] h-[46px] w-[157px] bg-white px-[30px] text-[16px] font-normal text-black outline-none max-lg:static max-lg:mt-1 max-lg:h-[24px] max-lg:w-full max-lg:px-2 max-lg:text-[9px] wide:top-[45px] wide:h-[73px] wide:w-[231px] wide:text-[20px]"
      />

      <label className="absolute left-[173px] top-[10px] whitespace-nowrap text-[16px] font-extrabold leading-none text-black max-lg:static max-lg:mt-[8px] max-lg:text-[10px] wide:left-[253px] wide:text-[20px]">
        Your email address? <span className="text-[#ea4335]">*</span>
      </label>
      <input
        name="email"
        type="email"
        required
        defaultValue="johndoe@example.com"
        className="absolute left-[173px] top-[37px] h-[46px] w-[157px] bg-white px-[19px] text-[16px] font-normal text-black outline-none max-lg:static max-lg:mt-1 max-lg:h-[24px] max-lg:w-full max-lg:px-2 max-lg:text-[9px] wide:left-[253px] wide:top-[45px] wide:h-[73px] wide:w-[231px] wide:text-[18px]"
      />

      <label className="absolute left-[346px] top-[10px] whitespace-nowrap text-[16px] font-extrabold leading-none text-black max-lg:static max-lg:mt-[8px] max-lg:text-[10px] wide:left-[507px] wide:text-[20px]">
        Your contact number? <span className="text-[#ea4335]">*</span>
      </label>
      <input
        name="phone"
        type="tel"
        required
        className="absolute left-[346px] top-[37px] h-[46px] w-[157px] bg-white px-[20px] text-[16px] font-normal text-black outline-none max-lg:static max-lg:mt-1 max-lg:h-[24px] max-lg:w-full max-lg:px-2 max-lg:text-[9px] wide:left-[507px] wide:top-[45px] wide:h-[73px] wide:w-[231px] wide:text-[20px]"
      />

      <label className="absolute left-0 top-[96px] whitespace-nowrap text-[16px] font-extrabold leading-none text-black max-lg:static max-lg:mt-[8px] max-lg:text-[10px] wide:top-[133px] wide:text-[20px]">
        How can we help? <span className="text-[#ea4335]">*</span>
      </label>
      <textarea
        name="message"
        required
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
        className="absolute left-0 top-[125px] h-[321px] w-[503px] resize-none bg-white px-[60px] py-[50px] text-[16px] font-medium leading-[1.48] text-black outline-none max-lg:static max-lg:mt-1 max-lg:h-[80px] max-lg:w-full max-lg:px-2 max-lg:py-2 max-lg:text-[9px] wide:top-[168px] wide:h-[395px] wide:w-[738px] wide:text-[20px]"
      />

      <button
        type="submit"
        className="absolute bottom-0 right-0 h-[28px] w-[128px] rounded-none bg-pocket-blue text-[16px] font-extrabold text-white transition hover:bg-black max-lg:static max-lg:mt-[10px] max-lg:h-[28px] max-lg:w-full max-lg:rounded-[4px] max-lg:text-[10px] wide:bottom-[29px] wide:h-[54px] wide:w-[188px] wide:rounded-[16px] wide:text-[20px]"
      >
        Send
      </button>
      {submitted ? (
        <p className="absolute bottom-0 right-0 text-[16px] font-extrabold text-black max-lg:static max-lg:mt-3">
          Thanks, we&apos;ll be in touch.
        </p>
      ) : null}
    </form>
  );
}
