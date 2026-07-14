import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { PricingContactSection } from "../components/pricing/PricingContactSection";
import { PricingExplainerSection } from "../components/pricing/PricingExplainerSection";
import { PricingHero } from "../components/pricing/PricingHero";
import { PricingModelSection } from "../components/pricing/PricingModelSection";
import { PricingServiceRates } from "../components/pricing/PricingServiceRates";

export default function PricingPage() {
  return (
    <PageChrome activeLabel="Pricing" rootClassName="min-h-screen bg-pocket-canvas">
      <main id="pricing-page" className="flex flex-col">
        <PricingHero />
        <PricingModelSection />
        <PricingExplainerSection />
        <PricingContactSection />
        <PricingServiceRates />
      </main>
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Pricing | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Pricing for Pocket Creatives video production and photography projects."
      />
    </>
  );
}
