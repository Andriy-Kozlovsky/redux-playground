import {useSelector, useDispatch} from "react-redux";

import {removeItem, editItem} from "../store";

const List = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.list.items);
  const editId = useSelector((state: any) => state.list.editId);

  const handleRemove = (index: number) => {
    dispatch(removeItem(index));
  };

  const handleEdit = (index: number) => {
    dispatch(editItem(index));
  };

  return (
    <ul className="mt-4 bg-blue-200 p-2 space-y-2 mb-2">
      {items.map((item: any, index: number) => (
        <li
          key={item.id}
          className={`font-bold flex justify-between px-3 ${item.id === editId && "text-red-500"}`}
        >
          {item.name}
          <div>
            <button
              className={`bg-blue-900 rounded-md px-2 text-white font-normal mr-2 hover:bg-blue-600 ${
                item.id === editId && "bg-red-500"
              }`}
              onClick={() => handleEdit(index)}
            >
              E
            </button>
            <button
              className="bg-blue-900 rounded-md px-2 text-white font-normal hover:bg-blue-600"
              onClick={() => handleRemove(index)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
