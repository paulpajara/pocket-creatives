import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../utils/cn";

export function ModalShell({
  children,
  isOpen,
  onClose,
  titleId,
  className,
  panelClassName,
  showCloseButton = true
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-pocket-ink/65 px-4 py-8", className)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className={cn("relative w-full overflow-hidden rounded-3xl bg-white shadow-soft", panelClassName)}>
        {showCloseButton ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pocket-yellow text-pocket-ink transition hover:bg-pocket-ink hover:text-white"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
}
