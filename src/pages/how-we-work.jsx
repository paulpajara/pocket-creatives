import React from "react";
import { HowWeWorkClosingSection } from "../components/how-we-work/HowWeWorkClosingSection";
import { HowWeWorkIntro } from "../components/how-we-work/HowWeWorkIntro";
import { HowWeWorkProcess } from "../components/how-we-work/HowWeWorkProcess";
import { HowWeWorkStorySection } from "../components/how-we-work/HowWeWorkStorySection";
import { PageChrome } from "../components/layout/PageChrome";

export default function HowWeWorkPage() {
  return (
    <PageChrome activeLabel="Works" rootClassName="min-h-screen bg-pocket-canvas">
      {({ openContact }) => (
        <main id="how-we-work-page">
          <HowWeWorkIntro onContactClick={openContact} />
          <HowWeWorkProcess />
          <HowWeWorkStorySection />
          <HowWeWorkClosingSection />
        </main>
      )}
    </PageChrome>
  );
}

export const Head = () => <title>How We Work | Pocket Creatives</title>;
