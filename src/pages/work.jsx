import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { WorksPortfolioPage } from "../components/works/WorksPortfolioPage";

export default function WorksPage() {
  return (
    <PageChrome activeLabel="Works" rootClassName="min-h-screen bg-pocket-canvas">
      <WorksPortfolioPage />
    </PageChrome>
  );
}

export const Head = () => <title>Works | Pocket Creatives</title>;
