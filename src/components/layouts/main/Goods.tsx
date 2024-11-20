import React from 'react';
import DefaultTab from 'components/tab/DefualtTab';
import GoodsTabs from 'components/tab/GoodsTabs';
const Goods = () => {
  return (
    <div className="goods_wrap">
      <div className="goods_wrap_inner">
        <h2 className="basic_title line_height50">
          <span className="point_title">EVERYTING</span> FOR CATS.
          <p className="basic_sub_title">고양이를 위한 제품들을 여기서 만나보세요.</p>
        </h2>
        <div className="tab_wrapper">
          <DefaultTab>
            <GoodsTabs selectedValue="all" />
          </DefaultTab>
        </div>
      </div>
    </div>
  );
};

export default Goods;
