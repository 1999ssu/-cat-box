import React, { useState, useEffect, useCallback } from 'react';
import TabPanel from '@mui/material/Tabs';
import GoodsTabsData from 'components/tab/GoodsTabsData';
import 'components/tab/_tab.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from 'services/slices/cartSlice';
interface GoodsTabsProps {
  selectedValue: string; // selectedValue prop 추가
}
const GoodsTabs: React.FC<GoodsTabsProps> = ({ selectedValue }) => {
  const dispatch = useDispatch();
  const [allItems, setAllItems] = useState(GoodsTabsData);

  const filterItems = useCallback(() => {
    if (selectedValue === 'all') {
      setAllItems(GoodsTabsData); // 전체 데이터
    } else {
      const filtered = GoodsTabsData.filter((item) => item.type === selectedValue);
      setAllItems(filtered); // 선택된 타입의 데이터
    }
  }, [selectedValue]);

  useEffect(() => {
    filterItems(); // selectedValue가 변경될 때마다 filterItems 호출
  }, [filterItems]); // selectedValue를 의존성 배열에 추가

  return (
    <ul className="tabs_wrap goods">
      {allItems.map((item, index) => (
        <li key={index} className="tab_list flex_column width_300">
          <button onClick={() => dispatch(addToCart(item))} className="add_btn">
            <div className="img_box">
              <img src={item.url} alt={item.title} />
            </div>
            <div className="text_wrap flex_column gap_10">
              <p className="basic_sub_title">{item.title}</p>
              <p className="bold_font basic_sub_title">$ {item.price}</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};
export default GoodsTabs;
