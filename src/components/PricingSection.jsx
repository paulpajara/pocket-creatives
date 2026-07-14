import React from "react";
import { Check } from "lucide-react";
import { asset } from "../data/siteContent";
import { PillButton } from "./PillButton";

export function PricingSection({ onContactClick }) {
  return (
    <section id="pricing" className="bg-pocket-canvas py-20 max-lg:h-[985px] max-lg:py-0 sm:py-28 lg:h-[881px] lg:py-0 wide:h-[864px] wide:border-b-[3px] wide:border-pocket-blue wide:py-0">
      <div className="relative mx-auto h-full w-[390px] max-w-[calc(100vw-40px)] lg:hidden">
        <h2 className="absolute left-0 top-0 w-[390px] text-[40px] font-extrabold leading-none tracking-[-2px] text-black">
          We value <span className="text-pocket-blue">transparency</span>,<br />
          so let&apos;s talk about pricing.
        </h2>
        <PillButton
          type="button"
          variant="yellow"
          onClick={onContactClick}
          className="absolute left-[125px] top-[220px] h-[34px] min-h-0 w-[139px] px-4 py-0 text-[16px]"
        >
          View Pricing
        </PillButton>
        <p className="absolute left-0 top-[314px] w-[391px] text-[30px] font-medium leading-none tracking-[-1.5px] text-pocket-muted">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
        </p>
        <p className="absolute left-[51px] top-[668px] text-[48px] font-medium leading-none tracking-[-2.4px] text-black">
          Pocket Promise
        </p>
        <div className="absolute left-0 top-[744px] flex h-[126px] w-[389px] items-center rounded-[42px] bg-pocket-yellow px-[22px]">
          <span className="text-[82px] font-extrabold leading-none tracking-[-7px] text-white">Value</span>
          <span className="translate-x-[3px] mt-8 text-[47px] font-medium leading-none tracking-[-3px] text-black">Price</span>
          <Check className="ml-1 mt-8 h-[66px] w-[66px] flex-none text-pocket-blue" />
        </div>
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1440px] lg:block wide:hidden">
        <h2 className="absolute left-[37px] top-[142px] w-[1120px] text-[80px] font-extrabold leading-none tracking-[-4px] text-black">
          We value <span className="text-pocket-blue">transparency</span>,
          <br />
          so let&apos;s talk about pricing.
        </h2>
        <PillButton
          type="button"
          variant="yellow"
          onClick={onContactClick}
          className="absolute left-[1182px] top-[162px] h-[34px] min-h-0 w-[139px] whitespace-nowrap px-4 py-0 !text-[20px] !font-medium leading-none shadow-button"
        >
          View Pricing
        </PillButton>

        <p className="absolute left-[37px] top-[383px] w-[557px] text-[40px] font-medium leading-none tracking-[-2px] text-black">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
        </p>
        <p className="absolute left-[37px] top-[588px] w-[690px] text-[20px] font-medium leading-[2] tracking-[-1px] text-black">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
          consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
          Enim.
        </p>

        <div className="absolute left-[785px] top-[416px] flex items-center gap-[21px]">
          <img src={asset("logo-icon.png")} alt="" className="h-[42px] w-[43px] object-contain" />
          <p className="text-[48px] font-medium leading-none tracking-[-2.4px] text-black">
            Pocket Promise
          </p>
        </div>
        <div className="absolute left-[767px] top-[566px] h-[137px] w-[494px] rounded-2xl bg-pocket-yellow" />
        <p className="absolute left-[805px] top-[590px] text-[96px] font-extrabold leading-none tracking-[-4.8px] text-white">
          Value
        </p>
        <p className="absolute left-[1050px] top-[635px] text-[48px] font-medium leading-none tracking-[-2.4px] text-black">
          Price
        </p>
        <Check className="absolute left-[1160px] top-[618px] h-20 w-20 text-pocket-blue" />
      </div>

      <div className="relative mx-auto hidden h-full max-w-[1920px] wide:block">
        <h2 className="absolute left-[277px] top-[97px] w-[920px] text-[80px] font-extrabold leading-none tracking-[-4px]">
          <span className="text-pocket-yellow">We value</span>{" "}
          <span className="text-pocket-blue">transparency</span>
          <span className="text-pocket-muted">,</span>
          <br />
          <span className="text-pocket-muted">so let&apos;s talk about pricing.</span>
        </h2>
        <PillButton
          type="button"
          variant="yellow"
          onClick={onContactClick}
          className="absolute left-[1421px] top-[129px] h-[60px] min-h-0 w-[226px] rounded-2xl px-4 py-0 !text-[30px] !font-medium shadow-[3px_3px_3px_#526e87]"
        >
          View Pricing
        </PillButton>
        <p className="absolute left-[277px] top-[342px] w-[708px] text-[40px] font-medium leading-none tracking-[-2px] text-pocket-muted">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
        </p>
        <p className="absolute left-[277px] top-[540px] w-[701px] text-[20px] font-medium leading-[2] tracking-[-1px] text-pocket-muted">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia
          consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
          Enim.
        </p>
        <button
          type="button"
          onClick={onContactClick}
          className="absolute left-[1004px] top-[524px] flex h-[137px] w-[643px] items-center justify-between rounded-2xl bg-pocket-yellow px-[68px] shadow-[3px_3px_6px_#526e87]"
        >
          <span className="text-[96px] font-extrabold leading-none tracking-[-4.8px] text-white">
            Request
          </span>
          <span className="w-[124px] text-center text-[48px] font-medium leading-[0.8] tracking-[-2.4px] text-black">
            a<br />
            quote
          </span>
        </button>
      </div>
    </section>
  );
}
