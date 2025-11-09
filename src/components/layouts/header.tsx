import React from 'react';
import 'components/layouts/_header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';
const Header = () => {
  const totalCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div className="header_wrap">
      <div className="header_inner">
        <h1 className="logo">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
        </h1>
        <div className="header_menu">
          <div className="header_menu_list">
            <Link to="/">CAT BOX</Link>
            {/* <a href="/">CAT REGISTER</a> */}
            {/* <a href="/">CATBOX FOUND</a> */}
            {/* <a href="/">CAT NEWS</a> */}
            <Link to="/shop">CAT SHOP</Link>
            <Link to="/cart">CAT CART ({totalCount})</Link>
          </div>
          {/* <div className="header_menu_my">
            <a href="/">MY</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
