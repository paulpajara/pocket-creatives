import React from "react";
import { PillButton } from "../components/PillButton";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-pocket-paper px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-soft">
        <p className="text-sm font-semibold uppercase text-pocket-blue">404</p>
        <h1 className="mt-4 text-5xl font-extrabold">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-pocket-muted">
          The page you are looking for is not here, but the Pocket Creatives homepage is ready.
        </p>
        <PillButton as="a" href="/" variant="yellow" className="mt-8">
          Back home
        </PillButton>
      </div>
    </main>
  );
}

export function Head() {
  return (
    <>
      <title>Page not found | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
