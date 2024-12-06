import React from 'react';
const Album = () => {
  return (
    <div className="album_wrap">
      <div className="album_wrap_inner">
        <div className="text_box flex_space_between">
          <h2 className="basic_title line_height50">
            CAT<span className="point_title"> ALBUM.</span>
          </h2>
          <p className="basic_sub_title">우리 동네 고양이들의 소식을 만나보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
