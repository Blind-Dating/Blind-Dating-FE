import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-[812px] mx-auto pt-16 ">
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
