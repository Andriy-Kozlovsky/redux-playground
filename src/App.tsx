import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-800 h-screen pt-20">
      <div className="max-w-lg mx-auto bg-blue-900 rounded-sm">
        <Navbar />
        <div className="px-8 mt-5 pb-3">
          <Form />
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
