import React, { useCallback, useEffect, useState } from 'react';
import 'assets/scss/_main.scss';
function Visual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewImage, setIsNewImage] = useState(false);

  const imgSlide = [
    {
      catImg: '/images/visual/visualImg01.svg',
    },
    {
      catImg: '/images/visual/visualImg02.svg',
    },
  ];

  // 컴포넌트 마운트 시 애니메이션 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewImage(false);
    }, 3000); // 애니메이션 시간과 동일하게 설정

    return () => clearTimeout(timer);
  }, []); //
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imgSlide.length);
    setIsNewImage(true);
    setTimeout(() => {
      setIsNewImage(false);
    }, 3000);
  }, [imgSlide.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // 5초마다 자동 슬라이드
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <div className="visual_wrap">
      <div className="visual_wrap_inner">
        <div className={`visual_wrap_inner_img_box ${isNewImage ? 'new-image' : ''}`}>
          <p
            className={`visual_wrap_inner_img_box_img`}
            style={{
              background: `url(${imgSlide[currentIndex].catImg}) no-repeat center center / cover`,
            }}
          ></p>
        </div>
        <div className="visual_wrap_inner_text_box">
          <p className="basic_sub_title line_height26">
            Catbox Exist For <br /> All The Cats In The World
          </p>
          <p className="basic_title line_height50 animationTitle">
            FOR <span className="point_title">CATS </span> <br />
            IN THE WORLD.
          </p>
          <p className="basic_sub_title line_height26">
            우리는 고양이가 편안히 휴식할 수 있는
            <br /> 임시거처 뿐만 아니라, 이들을 위해
            <br /> 지정된 장소에 안전하고 맛있는 급식을
            <br /> 제공할 수 있도록 존재합니다.
            <br /> 고양이에 의한, 고양이를 위한 캣박스를 지금 만나 보세요.
          </p>
          <p>
            <a className="basic_sub_title_v2 border_bottom_font bold_font" href="/">
              START CAT BOX!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Visual;
