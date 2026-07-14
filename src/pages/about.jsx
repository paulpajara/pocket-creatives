import React from "react";
import { AboutBehindScenes } from "../components/about/AboutBehindScenes";
import { AboutClientsSection } from "../components/about/AboutClientsSection";
import { AboutCodeSection } from "../components/about/AboutCodeSection";
import { AboutCompanyIntro } from "../components/about/AboutCompanyIntro";
import { AboutHero } from "../components/about/AboutHero";
import { AboutStorySection } from "../components/about/AboutStorySection";
import { AboutWhySection } from "../components/about/AboutWhySection";
import { AboutWorksSection } from "../components/about/AboutWorksSection";
import { PageChrome } from "../components/layout/PageChrome";

export default function AboutPage() {
  return (
    <PageChrome activeLabel="About" rootClassName="min-h-screen bg-pocket-canvas">
      {({ openContact }) => (
        <main id="about-page" className="flex flex-col">
          <section className="order-1">
            <AboutHero onContactClick={openContact} />
          </section>

          <section className="order-2">
            <AboutCompanyIntro onContactClick={openContact} />
          </section>

          <section className="order-3">
            <AboutWorksSection />
          </section>

          <section className="order-4">
            <AboutWhySection />
          </section>

          <section className="order-5 desktop:order-7 mobile:order-7">
            <AboutBehindScenes />
          </section>

          <section className="order-6 desktop:order-5 mobile:order-5">
            <AboutCodeSection />
          </section>

          <section className="order-7 desktop:order-6 mobile:order-6">
            <AboutClientsSection />
          </section>

          <section className="order-8">
            <AboutStorySection />
          </section>
        </main>
      )}
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>About | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="About Pocket Creatives, our video production and photography team, story, values, and clients."
      />
    </>
  );
}
