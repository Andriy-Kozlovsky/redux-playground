import {useDispatch} from "react-redux";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const dispatch = useDispatch();

  const clearListHandler = () => {
    dispatch({type: "CLEAR_LIST"});
  };

  return (
    <div className="App">
      <h1>Todos: Redux Basics</h1>
      <Form />
      <List />
      <button onClick={clearListHandler}>Borrar todo</button>
    </div>
  );
};

export default App;
