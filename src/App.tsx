import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Todos: Redux Basics</h1>
      <Form />
      <List />
      <button>Borrar todo</button>
    </div>
  );
}

export default App;
