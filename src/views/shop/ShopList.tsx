import Header from 'components/layouts/Header';
import DefaultTab from 'components/tab/DefualtTab';
import GoodsTabs from 'components/tab/GoodsTabs';
import React from 'react';

const ShopList = () => {
  return (
    <div className="shop_list">
      <div className="tab_wrapper">
        <DefaultTab>
          <GoodsTabs selectedValue="all" />
        </DefaultTab>
      </div>
    </div>
  );
};

export default ShopList;
