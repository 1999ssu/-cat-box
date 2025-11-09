import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'services/store';
import { addToCart, removeFromCart, decreaseQuantity } from 'services/slices/cartSlice';

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart_wrap">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="tabs_wrap">
          {cartItems.map((item, idx) => (
            <li key={idx} className="tab_list flex_column width_300">
              <div className="img_box">
                <img src={item.url} alt={item.title} />
              </div>
              <div className="text_wrap">
                <div className="text_wrap flex_column gap_10">
                  <p className="basic_sub_title">{item.title}</p>
                  <p className="bold_font basic_sub_title">$ {item.price}</p>
                </div>
                <div className="text_wrap gap_10">
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                  <p> {item.quantity}</p>
                  <button onClick={() => dispatch(decreaseQuantity(item.title))}>-</button>

                  <button onClick={() => dispatch(removeFromCart(item.title))}>remove</button>
                </div>
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
