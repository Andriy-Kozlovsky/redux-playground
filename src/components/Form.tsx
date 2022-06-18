import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {formActions} from "../store/form";
import {listActions} from "../store/list";

const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.form.name);
  const price = useSelector((state: any) => state.form.price);

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.changeName(e.target.value));
  };

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.changePrice(e.target.value));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(listActions.addItem({name: name, price: price}));
    dispatch(formActions.reset());
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Ingresa tu producto"
        type="text"
        value={name}
        onChange={nameChangeHandler}
      />
      <input type="number" value={price} onChange={priceChangeHandler} />
      <button>Guardar</button>
    </form>
  );
};

export default Form;
