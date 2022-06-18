import {useSelector, useDispatch} from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: string[]) => state);

  const removeHandler = (i: number) => {
    dispatch({type: "REMOVE", index: i});
  };

  return (
    <ul>
      {list.length === 0 ? (
        <p>Agregá tareas!</p>
      ) : (
        list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeHandler(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default List;
