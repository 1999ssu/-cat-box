import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItems {
  title: string;
  subTitle: string;
  url: string;
  type: string;
  quantity: number;
}

interface CartState {
  items: CartItems[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItems, 'quantity'>>) => {
      const existingItem = state.items.find((item) => item.title === action.payload.title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.title !== action.payload); //같은 타이틀 전부 삭제
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((item) => item.title === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; //수량만 감소
        } else {
          state.items = state.items.filter((item) => item.title !== action.payload); //1개면 삭제
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
