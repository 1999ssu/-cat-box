import React from 'react';
import 'components/layouts/_footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer_inner">
        <h1 className="logo">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
        </h1>
        <div className="footer_menu">
          <p className="footer_item">catBox ⓒ 2024</p>
          <Link className="footer_item" to="https://www.instagram.com/ghdsuwl/">
            INSTAGRAM
          </Link>
          <Link className="footer_item" to="https://github.com/1999ssu/-cat-box">
            GITHUB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
