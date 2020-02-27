import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems, addItemQuantity, deleteItem } from "../actions";
import FormAddToCart from "./formAddToCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  useEffect(() => {
    dispatch(loadItems());
  }, []);

  const onAddItemQuantity = (id, quantity) => () => {
    dispatch(addItemQuantity(id, quantity));
  };

  const onDeleteItem = id => () => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.items.map(({ id, name, price, quantity }) => (
          <li key={name}>
            <div>
              <div>{name}</div>
              <div>{price}</div>
              <div>{quantity}</div>
              <div>
                <button onClick={onAddItemQuantity(id, 1)}>+</button>
                <button onClick={onAddItemQuantity(id, -1)}>-</button>
              </div>
              <div>
                <button onClick={onDeleteItem(id)}>del</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <FormAddToCart />
    </div>
  );
};

export default Cart;
