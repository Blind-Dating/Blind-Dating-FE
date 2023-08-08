import React from 'react';

function NoHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto w-[375px] h-[812px]  pt-32">
      {children}
    </div>
  );
}

export default NoHeaderFooterLayout;
