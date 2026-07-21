import React from "react";
import { PageChrome } from "../components/layout/PageChrome";
import { TrainingBehindScenes } from "../components/training/TrainingBehindScenes";
import { TrainingCourses } from "../components/training/TrainingCourses";
import { TrainingHowItWorks } from "../components/training/TrainingHowItWorks";
import { TrainingIntro } from "../components/training/TrainingIntro";
import { TrainingTestimonial } from "../components/training/TrainingTestimonial";

export default function CreativeTrainingCoursesPage() {
  return (
    <PageChrome rootClassName="min-h-screen bg-pocket-canvas">
      {({ openContact }) => (
        <main id="creative-training-courses-page">
          <TrainingIntro />
          <TrainingHowItWorks />
          <TrainingCourses onContactClick={openContact} />
          <TrainingBehindScenes />
          <TrainingTestimonial />
        </main>
      )}
    </PageChrome>
  );
}

export function Head() {
  return (
    <>
      <title>Creative Training Courses | Pocket Creatives</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Bespoke one-to-one, in-person video production, photography, and editing training from Pocket Creatives in London."
      />
    </>
  );
}
