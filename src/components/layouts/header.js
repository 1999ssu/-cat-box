import React from 'react';
import './_header.scss';
const Header = () => {
  return (
    <div className="header_wrap">
      <div className="header_inner">
        <h1 className="logo">
          <a href="/">
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </h1>
        <div className="header_menu">
          <div className="header_menu_list">
            <a href="/">CAT BOX</a>
            <a href="/">CAT REGISTER</a>
            <a href="/">CATBOX FOUND</a>
            <a href="/">CAT NEWS</a>
            <a href="/">CAT SHOP</a>
          </div>
          <div className="header_menu_my">
            <a href="/">MY</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
