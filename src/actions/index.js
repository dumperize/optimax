export const PUT_ITEMS = "PUT_ITEMS";
export const LOAD_ITEMS = "LOAD_ITEMS";
export const ADD_ITEM_QUANTITY = "ADD_ITEM_QUANTITY";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export const putItems = dataFromServer => ({
  type: PUT_ITEMS,
  payload: dataFromServer
});

export const loadItems = () => ({
  type: LOAD_ITEMS
});

export const addItemQuantity = (id, quantity) => ({
  type: ADD_ITEM_QUANTITY,
  payload: { id, quantity }
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: { id }
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
