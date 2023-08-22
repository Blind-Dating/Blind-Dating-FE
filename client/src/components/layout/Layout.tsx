import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="container w-[375px] h-[812px] flex flex-col">
        <Navbar title={title} />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
