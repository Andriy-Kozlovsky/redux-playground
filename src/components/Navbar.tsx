import {useSelector} from "react-redux";

const Navbar = () => {
  const amount = useSelector((state: any) => state.list.items.length);

  return (
    <nav className="flex align-middle justify-between bg-gray-900 text-white max-w-xl px-4 py-2">
      <h3 className="text-2xl">ReduxList</h3>
      <div className="text-lg text-blue-400">
        Cantidad:{" "}
        <span className="px-2 rounded-full bg-blue-300 text-black font-bold">{amount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
