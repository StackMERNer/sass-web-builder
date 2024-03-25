import React, { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-full">{children}</div>;
};

export default SiteLayout;
