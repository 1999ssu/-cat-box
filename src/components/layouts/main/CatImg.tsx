import React, { useEffect, useRef, useState } from 'react';
import 'assets/scss/_main.scss';
function CatImg() {
  const [isVisible, setIsVisible] = useState(false);
  const catImgRef = useRef(null);

  useEffect(() => {
    const currentImg = catImgRef.current;
    // IntersectionObserver 인스턴스 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어왔는지 확인
        if (entry.isIntersecting) {
          // 상태를 true로 변경
          setIsVisible(true);
          // 관찰 중단
          observer.unobserve(entry.target);
        }
      },
      {
        // 요소의 20%가 보일 때 콜백 실행
        threshold: 0.2,
      }
    );
    // 관찰 시작
    if (currentImg) {
      observer.observe(currentImg);
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, []); // 빈 의존성 배열: 마운트 시에만 실행

  return (
    // mg_b230
    <div ref={catImgRef} className={`cat_img_wrap  ${isVisible ? 'scroll' : ''}`}>
      <div className="cat_img_wrap_inner">
        <div className="cat_img_wrap_inner_img_box box_img01">
          <p
            className="cat_img_img01"
            style={{
              background: 'url(/images/visual/visual2_img01.svg) no-repeat center center / contain',
            }}
          />
        </div>
        <div className="cat_img_wrap_inner_img_box box_img02">
          <p
            className="cat_img_img02"
            style={{
              background: 'url(/images/visual/visual2_img02.svg) no-repeat center center / contain',
            }}
          />
        </div>
        <div className="cat_img_wrap_inner_img_box box_img03">
          <p
            className="cat_img_img03"
            style={{
              background: 'url(/images/visual/visual2_img03.svg) no-repeat center center / contain',
            }}
          />
        </div>
        <div className="cat_img_wrap_inner_text_box">
          <p className="text_01 basic_sub_title text_01 line_height26">
            세상의
            <br />
            모든
            <br />
            <span className="point_color">고양이</span>들을 위해,
          </p>
          <p className="text_02 basic_sub_title line_height26 roate_90">for cats in the world</p>
          <p
            className="text_03 cat_img_wrap_inner_text_box_text"
            style={{
              background: 'url(/images/visual/visual2_img04.svg) no-repeat center center / contain',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CatImg;
