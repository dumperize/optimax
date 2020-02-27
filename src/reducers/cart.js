import {
  PUT_ITEMS,
  ADD_ITEM_QUANTITY,
  DELETE_ITEM,
  ADD_ITEM
} from "../actions";

const initialValue = {
  items: []
};

export default (state = initialValue, action) => {
  switch (action.type) {

    case PUT_ITEMS:
      return { ...state, items: action.payload };

    case ADD_ITEM_QUANTITY:
      const newItems = state.items
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        .filter(item => item.quantity > 0);
      return { ...state, items: newItems };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    case ADD_ITEM:
      const isExist = state.items.find(item => item.id === action.payload.id);
      if (isExist) return state;
      return { ...state, items: [action.payload, ...state.items] };
  }
  return state;
};
