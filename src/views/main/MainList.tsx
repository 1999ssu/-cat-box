import React from 'react';
import Header from 'components/layouts/header';
import CatImg from 'components/layouts/main/CatImg';
import Visual from 'components/layouts/main/Visual';
import Goods from 'components/layouts/main/Goods';

// import Header from '../../components/layouts/header';
// import Visual from '../../components/layouts/main/Visual';
// import CatImg from '../../components/layouts/main/CatImg';

// import Brand from '../../components/layouts/main/Brand';
function MainList() {
  return (
    <div className="main_wrap">
      <Header />
      <Visual />
      <div className="container_wrap wdith_1200 gap_230">
        <CatImg />
        <Goods />
        {/* <Brand /> */}
      </div>
    </div>
  );
}

export default MainList;
