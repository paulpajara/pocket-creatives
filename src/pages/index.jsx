import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { Hero } from "../components/Hero";
import { ClientLogos } from "../components/ClientLogos";
import { TakeALookSection } from "../components/TakeALookSection";
import { VideoWorkSection } from "../components/VideoWorkSection";
import { QualitySection } from "../components/QualitySection";
import { PhotographySection } from "../components/PhotographySection";
import { FeatureChecklist } from "../components/FeatureChecklist";
import { TeamSection } from "../components/TeamSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { PricingSection } from "../components/PricingSection";

export default function IndexPage() {
  return (
    <PageChrome>
      {({ openContact }) => (
        <main>
          <Hero onContactClick={openContact} />
          <ClientLogos />
          <TakeALookSection />
          <VideoWorkSection onContactClick={openContact} />
          <QualitySection />
          <PhotographySection onContactClick={openContact} />
          <FeatureChecklist onContactClick={openContact} />
          <TeamSection onContactClick={openContact} />
          <ReviewsSection onContactClick={openContact} />
          <PricingSection onContactClick={openContact} />
        </main>
      )}
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Pocket Creatives | Video Production and Photography</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Pocket Creatives is a fast and friendly video production and photography company."
      />
    </>
  );
}
