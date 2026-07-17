import React from "react";
import { BlogLandingPage } from "../components/blog/BlogLandingPage";
import { PageChrome } from "../components/layout/PageChrome";

export default function BlogsPage() {
  return (
    <PageChrome rootClassName="min-h-screen bg-pocket-canvas">
      <BlogLandingPage />
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Blogs | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Production notes, practical guides, and creative inspiration from Pocket Creatives."
      />
    </>
  );
}
