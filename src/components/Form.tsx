import {useSelector, useDispatch} from "react-redux";

import {addItem, updateInputValue} from "../store";

const Form = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: any) => state.list.inputValue);
  const editId = useSelector((state: any) => state.list.editId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInputValue(e.target.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addItem({name: e.target["text"].value, id: Date.now()}));
  };

  return (
    <form className="bg-blue-300 flex justify-between p-2 space-x-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 outline-none px-3 py-1 border borer-white focus:border focus:border-blue-900"
        name="text"
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <button
        className={`bg-blue-900 text-white px-4 rounded-md hover:bg-blue-700 ${
          editId > 0 && "bg-red-500"
        }`}
      >
        {editId > 0 ? "Editar" : "Agregar"}
      </button>
    </form>
  );
};

export default Form;
