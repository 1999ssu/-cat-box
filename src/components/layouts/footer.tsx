import React from 'react';
import 'components/layouts/_footer.scss';
const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer_inner">
        <h1 className="logo">
          <a href="/">
            <img src="../images/logo.svg" alt="logo" />
          </a>
        </h1>
        <div className="footer_menu">
          <p className="footer_item">catBox ⓒ 2024</p>
          <a className="footer_item" href="https://www.instagram.com/ghdsuwl/">
            INSTAGRAM
          </a>
          <a className="footer_item" href="https://github.com/1999ssu/-cat-box">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
