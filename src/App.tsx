import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";
import StatusBar from "./components/Statusbar";
import {sendData, fetchData} from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list.items);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    // @ts-ignore
    dispatch(sendData(list));
  }, [list, dispatch]);

  return (
    <div className="bg-gray-800 h-screen pt-20">
      <div className="max-w-lg mx-auto bg-blue-900 rounded-sm">
        <Navbar />
        <div className="px-8 mt-5 pb-3">
          <Form />
          <List />
        </div>
        <StatusBar />
      </div>
    </div>
  );
}

export default App;
