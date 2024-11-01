// import '../../../assets/scss/_main.scss';
import React from 'react';
import 'assets/scss/_main.scss';
function Brand() {
  return (
    <div className="brand_wrap">
      <div className="brand_wrap_inner">
        <div className="brand_wrap_inner_text_box">
          <p className="text_01 basic_sub_title text_01 line_height26">
            세상의
            <br />
            모든
            <br />
            고양이들을 위해,
          </p>
          <p className="text_01 basic_sub_title text_01 line_height26">
            See More About
            <span className="point_color">CAT BOX</span>
          </p>
          <p className="text_02 basic_sub_title line_height26 roate_-90">for cats in the world</p>
        </div>
        <div className="brand_wrap_inner_img_box">
          <p
            className="brand_img01"
            style={{
              background: 'url(/images/brand/brand_img01.svg) no-repeat center center / contain',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
