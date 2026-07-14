import React from "react";
import { IntroPanel } from "../shared/IntroPanel";
import {
  serviceIntroMobileStyles,
  serviceIntroSizeStyles,
  serviceIntroVariantStyles
} from "../shared/sectionRecipes";

export function ServiceIntroPanel({ panel }) {
  return (
    <IntroPanel
      panel={panel}
      mobileStyles={serviceIntroMobileStyles}
      sizeStyles={serviceIntroSizeStyles}
      variantStyles={serviceIntroVariantStyles}
      fallbackMobileId="video-production"
    />
  );
}
