import {useSelector, useDispatch} from "react-redux";

import {ListItem} from "../models";
import {listActions} from "../store/list";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list);

  const removeItemHandler = (i: number) => {
    dispatch(listActions.removeItem(i));
  };

  const clearListHandler = () => {
    dispatch(listActions.clearList());
  };

  const totalPrice = list
    .map((item: any) => Number(item.price))
    .reduce((total: number, num: number) => total + num, 0);

  return (
    <ul>
      {list.map((item: ListItem, index: number) => (
        <li key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeItemHandler(index)}>X</button>
        </li>
      ))}
      <p>
        Total: <span>${totalPrice}</span>
      </p>
      <button onClick={clearListHandler}>Borrar todo</button>
    </ul>
  );
};

export default List;
