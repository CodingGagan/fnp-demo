const CHANGE_CART_AMOUNT = "CHANGE_CART_AMOUNT";

export const cartInitialState = {
  cartList: [
    {
      price: 250,
      name: "Statue Monk",
      imgUrl: "https://www.fnp.com/images/pr/l/v20201016223534/gandhi-monkey-themed-monk-idols_1.jpg",
      id: "7222243834583537",
      qty: 1,
    },
    {
      price: 250,
      name: "Statue Monk",
      imgUrl: "https://www.fnp.com/images/pr/l/v20201016223534/gandhi-monkey-themed-monk-idols_1.jpg",
      id: "7222243834583537",
      qty: 1,
    },
    {
      price: 250,
      name: "Statue Monk",
      imgUrl: "https://www.fnp.com/images/pr/l/v20201016223534/gandhi-monkey-themed-monk-idols_1.jpg",
      id: "7222243834583537",
      qty: 1,
    },
  ],
};

export type CartItem = {
  id: string | number;
  name: string;
  qty: number;
  price: number;
  imgUrl?: string;
};

export type cartStateType = {
  cartList: CartItem[];
};

export type cartActionType = {
  type: typeof CHANGE_CART_AMOUNT;
  payload: CartItem;
};

export const cartReducer: React.Reducer<cartStateType, cartActionType> = (
  state: cartStateType,
  action: cartActionType
) => {
  switch (action.type) {
    case CHANGE_CART_AMOUNT:
      let cartList = state.cartList;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1)
        return {
          cartList: cartList.filter((item) => item.id !== cartItem.id),
        };
      else if (exist)
        return {
          cartList: cartList.map((item) => {
            if (item.id === cartItem.id) return { ...item, qty: cartItem.qty };
            else return item;
          }),
        };
      else
        return {
          cartList: [...cartList, cartItem],
        };

    default: {
    }
  }
};
