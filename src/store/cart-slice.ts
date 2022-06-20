// @ts-nocheck

import {createSlice} from "@reduxjs/toolkit";

import {uiActions} from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem: any = state.items.find((item: any) => item.id === newItem.id);

      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem: any = state.items.find((item: any) => item.id === id);

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart: any) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6384e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent!",
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Something went wrong!",
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
