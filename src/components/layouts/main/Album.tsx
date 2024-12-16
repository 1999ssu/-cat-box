import React, { useRef, useState } from 'react';
import useCatImgs from 'hooks/compute/main/catAlbum/catAlbum';
// import { getCatImgs } from 'api/catAlbumApi';
const Album = () => {
  const { catImgs, loading, error } = useCatImgs();

  console.log('catImgs::', catImgs);
  console.log('loading::', loading);
  console.log('error::', error);

  const imgBoxRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [startX, setStartX] = useState(0); // 시작 위치
  const [scrollLeftStart, setScrollLeftStart] = useState(0); // 드래그 시작 시 스크롤 위치

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgBoxRef.current) return;

    setIsDragging(true); // 드래그 시작 상태 설정
    setStartX(e.pageX); // 현재 마우스 위치 저장
    setScrollLeftStart(imgBoxRef.current.scrollLeft); // 현재 스크롤 위치 저장
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !imgBoxRef.current) return;

    e.preventDefault(); // 기본 동작 방지
    const x = e.pageX; // 현재 마우스 위치
    const walk = x - startX; // 드래그 이동 거리
    imgBoxRef.current.scrollLeft = scrollLeftStart - walk; // 스크롤 위치 업데이트
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false); // 드래그 종료
  };

  const preventImageDrag = (e: React.DragEvent) => {
    e.preventDefault(); // 이미지 드래그 기본 동작 방지
  };
  return (
    <div className="album_wrap">
      <div className="album_wrap_inner">
        <div className="text_box flex_space_between">
          <h2 className="basic_title line_height50">
            CAT<span className="point_title"> ALBUM.</span>
          </h2>
          <p className="basic_sub_title">우리 동네 고양이들의 소식을 만나보세요.</p>
        </div>
        <div className="img_wrap album">
          <div
            className="img_box"
            ref={imgBoxRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {catImgs.map((item, index) => (
              <p key={index} className="img_list">
                <img
                  src={`https://cataas.com/cat/${item._id}`}
                  alt={`Cat ${index}`}
                  onDragStart={preventImageDrag}
                />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
