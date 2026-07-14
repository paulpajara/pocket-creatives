import React from "react";
import { cn } from "../../utils/cn";

export function DesignShell({ as: Component = "div", className, children }) {
  return <Component className={cn("mx-auto w-full max-w-[1920px] px-5 sm:px-8 lg:px-[37px] 2xl:px-[60px]", className)}>{children}</Component>;
}

export function FixedFrame({ as: Component = "div", className, children }) {
  return <Component className={cn("relative mx-auto w-full max-w-[1920px]", className)}>{children}</Component>;
}
