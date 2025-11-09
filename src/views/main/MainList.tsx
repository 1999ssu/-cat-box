import React from 'react';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import CatImg from 'components/layouts/main/CatImg';
import Visual from 'components/layouts/main/Visual';
import Goods from 'components/layouts/main/Goods';
import Brand from '../../components/layouts/main/Brand';
import Album from 'components/layouts/main/Album';

function MainList() {
  return (
    <div className="main_wrap">
      <Visual />
      <div className="container_wrap wdith_1200 gap_230">
        <CatImg />
        <Goods />
        <Brand />
        <Album />
      </div>
    </div>
  );
}

export default MainList;
