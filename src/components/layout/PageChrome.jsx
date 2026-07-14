import React, { useCallback, useState } from "react";
import { ContactPopup } from "../ContactPopup";
import { Footer } from "../Footer";
import { Header } from "../Header";

function Root({ className, children }) {
  if (!className) {
    return <>{children}</>;
  }

  return <div className={className}>{children}</div>;
}

export function PageChrome({ activeLabel = "Home", rootClassName, children, footerProps = {} }) {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);
  const renderedChildren = typeof children === "function" ? children({ openContact, closeContact }) : children;

  return (
    <Root className={rootClassName}>
      <Header onContactClick={openContact} activeLabel={activeLabel} />
      {renderedChildren}
      <Footer onContactClick={openContact} {...footerProps} />
      <ContactPopup isOpen={contactOpen} onClose={closeContact} />
    </Root>
  );
}
