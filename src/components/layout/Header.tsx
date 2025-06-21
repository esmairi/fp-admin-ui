import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="flex relative px-4 py-3"
      style={{ backgroundColor: 'var(--cyan-800)', color: '#ffc' }}
    >
      <div className="text-xl font-normal">FastApi administration</div>
      <div className="absolute right-0 text-white text-xs line-height-4 pr-3">
        <span className="mr-2">WELCOME, ADMIN.</span>
        <a href="#" className="text-white hover:underline  mr-2">
          VIEW SITE
        </a>
        <a href="#" className="text-white hover:underline  mr-2">
          CHANGE PASSWORD
        </a>
        <a href="#" className="text-white hover:underline ">
          LOG OUT
        </a>
      </div>
    </div>
  );
};

export default Header;
