import React from 'react';

function NoHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return <div className="container max-w-[812px] mx-auto pt-16">{children}</div>;
}

export default NoHeaderFooterLayout;
