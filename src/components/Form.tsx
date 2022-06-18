import {useDispatch} from "react-redux";
import {ChangeEvent, useState} from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch({type: "ADD", value: inputValue});
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} onChange={inputHandler} />
      <button>Agregar</button>
    </form>
  );
};

export default Form;
