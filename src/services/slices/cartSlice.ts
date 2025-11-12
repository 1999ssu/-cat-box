import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  title: string;
  price: number;
  url: string;
  type: string;
  quantity: number;
  totalItemPrice: number; // ✅ 개별 아이템 총가격
}

interface CartState {
  items: CartItem[];
  totalPrice: number; // ✅ 전체 합계
  totalQuantity: number; // ✅ 전체 수량
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity' | 'totalItemPrice'>>) => {
      const existingItem = state.items.find((item) => item.title === action.payload.title);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalItemPrice = existingItem.price * existingItem.quantity; // ✅ 개별 총가격 갱신
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalItemPrice: action.payload.price, // ✅ 처음엔 price 그대로
        });
      }

      // ✅ 전체 합계 갱신
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalItemPrice, 0);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((item) => item.title === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalItemPrice = existingItem.price * existingItem.quantity; // ✅ 개별 총가격 갱신
        } else {
          state.items = state.items.filter((item) => item.title !== action.payload);
        }
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalItemPrice, 0);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.title !== action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalItemPrice, 0);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
