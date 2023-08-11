import React from 'react';
import { ReactComponent as Cards } from '/public/icons/cards.svg';
import { ReactComponent as Likes } from '/public/icons/likes.svg';
import { ReactComponent as Messages } from '/public/icons/messages.svg';
import { ReactComponent as User } from '/public/icons/user.svg';

const FooterBtn = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button type="button" className="w-16 h-12 flex justify-center items-center">
      {icon}
    </button>
  );
};

function Footer() {
  return (
    <footer className="flex justify-around bg-whiteLilac pb-8 mt-8">
      <FooterBtn icon={<Cards />} />
      <FooterBtn icon={<Likes />} />
      <FooterBtn icon={<Messages />} />
      <FooterBtn icon={<User />} />
    </footer>
  );
}

export default Footer;
