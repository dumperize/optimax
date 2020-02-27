import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const FormAddToCart = () => {
  const [goods, setGoods] = useState([]);
  const [chooseGood, setChooseGood] = useState();
  const dispatch = useDispatch();

  async function fetchGoods() {
    const data = await fetch("/data/goods.json").then(data => data.json());
    
    setGoods(data);
  }

  useEffect(() => {
   fetchGoods();
  }, []);

  const handleChange = e => {
    setChooseGood(Number(e.target.value));
  };

  const onAddGood = (e) => {
    const addGood = goods.find(good => good.id === chooseGood);

    if (addGood) dispatch(addItem({ ...addGood, quantity: 1 }));
    e.preventDefault();
  };

  return (
    <form onSubmit={onAddGood}>
      <label>
        Choose in List
        <select value={chooseGood} onChange={handleChange}>
          {goods.map(({ id, name, price }) => (
            <option key={name} value={id}>
              {name} {price}$
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add"/>
    </form>
  );
};

export default FormAddToCart;
