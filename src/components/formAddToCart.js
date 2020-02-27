import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions";

const FormAddToCart = () => {
  const [goods, setGoods] = useState([]);
  const [availebleGoods, setAvailebleGoods] = useState([]);
  const [chooseGood, setChooseGood] = useState();
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  async function fetchGoods() {
    const data = await fetch("/data/goods.json").then(data => data.json());
    setGoods(data);
  }

  useEffect(() => {
    fetchGoods();
  }, []);

  useEffect(() => {
    setAvailebleGoods(
      goods.filter(good => !cart.items.find(item => item.id === good.id))
    );
  }, [cart]);

  const handleChange = e => {
    setChooseGood(Number(e.target.value));
  };

  const onAddGood = e => {
    const addGood = goods.find(good => good.id === chooseGood);

    if (addGood) dispatch(addItem({ ...addGood, quantity: 1 }));
    e.preventDefault();
  };

  return (
    <form onSubmit={onAddGood}>
      {availebleGoods.length > 0 ? (
        <>
          <label>
            Choose in List
            <select value={chooseGood} onChange={handleChange} defaultValue="">
              <option></option>
              {availebleGoods.map(({ id, name, price }) => (
                <option key={name} value={id}>
                  {name} {price}$
                </option>
              ))}
            </select>
          </label>

          <input type="submit" value="Add" />
        </>
      ) : (
        <p>No goods to add</p>
      )}
    </form>
  );
};

export default FormAddToCart;
