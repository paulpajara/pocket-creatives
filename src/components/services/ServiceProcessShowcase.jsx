import React from "react";
import { ProcessShowcase } from "../shared/ProcessShowcase";
import {
  serviceProcessBorderClasses,
  serviceProcessColorClasses,
  serviceProcessMobileHeights,
  serviceProcessRowPlacements
} from "../shared/sectionRecipes";

export function ServiceProcessShowcase({ section }) {
  return (
    <ProcessShowcase
      section={section}
      borderClasses={serviceProcessBorderClasses}
      colorClasses={serviceProcessColorClasses}
      mobileHeights={serviceProcessMobileHeights}
      rowPlacements={serviceProcessRowPlacements}
    />
  );
}
