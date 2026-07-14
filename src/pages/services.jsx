import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { ServiceIntroPanel } from "../components/services/ServiceIntroPanel";
import { ServiceProcessShowcase } from "../components/services/ServiceProcessShowcase";
import { ServiceSnippetCarousel } from "../components/services/ServiceSnippetCarousel";
import { serviceIntroPanels, serviceProcessSections } from "../data/siteContent";

export default function ServicesPage() {
  return (
    <PageChrome activeLabel="Services" rootClassName="min-h-screen bg-pocket-canvas">
      <main id="services-page">
        <ServiceIntroPanel panel={serviceIntroPanels[0]} />
        <ServiceProcessShowcase section={serviceProcessSections[0]} />
        <ServiceIntroPanel panel={serviceIntroPanels[1]} />
        <ServiceProcessShowcase section={serviceProcessSections[1]} />
        <ServiceIntroPanel panel={serviceIntroPanels[2]} />
        <ServiceSnippetCarousel />
      </main>
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Services | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Pocket Creatives video production and photography services."
      />
    </>
  );
}
