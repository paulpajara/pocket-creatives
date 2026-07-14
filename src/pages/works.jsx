import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { WorksClosingSection } from "../components/works/WorksClosingSection";
import { WorksIntro } from "../components/works/WorksIntro";
import { WorksProcess } from "../components/works/WorksProcess";
import { WorksStorySection } from "../components/works/WorksStorySection";

export default function WorksPage() {
  return (
    <PageChrome activeLabel="Works" rootClassName="min-h-screen bg-pocket-canvas">
      {({ openContact }) => (
        <main id="works-page">
          <WorksIntro onContactClick={openContact} />
          <WorksProcess />
          <WorksStorySection />
          <WorksClosingSection />
        </main>
      )}
    </PageChrome>
  );
}

export const Head = () => <title>Works | Pocket Creatives</title>;
