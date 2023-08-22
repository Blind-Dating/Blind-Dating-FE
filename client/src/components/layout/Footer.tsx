import React from 'react';
import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';

const FooterBtn = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button type="button" className="flex items-center justify-center w-16 h-12">
      {icon}
    </button>
  );
};

function Footer() {
  return (
    <footer className="flex justify-around flex-none pb-8 mt-8 bg-whiteLilac">
      <FooterBtn icon={<Cards />} />
      <FooterBtn icon={<Likes />} />
      <FooterBtn icon={<Messages />} />
      <FooterBtn icon={<User />} />
    </footer>
  );
}

export default Footer;
