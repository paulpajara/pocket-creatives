import React from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactLocation } from "../components/contact/ContactLocation";
import { ContactOpportunities } from "../components/contact/ContactOpportunities";
import { PageChrome } from "../components/layout/PageChrome";

export default function ContactPage() {
  return (
    <PageChrome activeLabel="Contact" rootClassName="min-h-screen bg-pocket-canvas">
      {({ openContact }) => (
        <main id="contact-page" className="flex flex-col">
          <ContactHero onMessageClick={openContact} />
          <ContactLocation />
          <ContactOpportunities />
        </main>
      )}
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Contact | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Contact Pocket Creatives to discuss a video production or photography project."
      />
    </>
  );
}
