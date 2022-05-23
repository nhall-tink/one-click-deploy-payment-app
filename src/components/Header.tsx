import React from 'react';
import { Logo } from '../assets/Logo';

const Header: React.FC = () => {
  return (
    <div className="display-flex justify-between p-32 mb-40">
      <a href="/">
        <Logo />
      </a>
      <a className="link" href="https://docs.tink.com/" target="_blank" rel="noopener noreferrer">
        Visit the docs
      </a>
    </div>
  );
};

export default Header;
