import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'services/store';
import { addToCart, removeFromCart, decreaseQuantity } from 'services/slices/cartSlice';

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cart = useSelector((state: RootState) => state.cart);
  console.log('cartItems::', cartItems);
  console.log('cart::', cart);
  return (
    <div className="cart_wrap">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="tabs_wrap flex_column">
          {cartItems.map((item, idx) => (
            <li key={idx} className="tab_list">
              <div className="flex_space_between">
                <div className="flex flex_center">
                  <div className="img_box">
                    <img src={item.url} alt={item.title} />
                  </div>
                  <p className="basic_sub_title text_align_r ">{item.title}</p>
                </div>
                <p className="bold_font point_color">${item.totalItemPrice.toLocaleString()}</p>
              </div>
              <div className="text_wrap gap_10 flex_content_end height_35">
                <div className="btn_wrap max_w_120 btn_gray flex_space_around">
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                  <p> {item.quantity}</p>
                  <button onClick={() => dispatch(decreaseQuantity(item.title))}>-</button>
                </div>

                <button onClick={() => dispatch(removeFromCart(item.title))}>remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart_total">
        <strong>Total:</strong> $ {cart.totalPrice.toLocaleString()}
      </div>
    </div>
  );
};

export default CartList;
