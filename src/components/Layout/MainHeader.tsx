import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <header className="bg-headerBg h-20 px-20 flex items-center justify-between">
      <h1 className="text-white text-3xl font-bold">ReduxCart</h1>
      <nav>
        <ul>
          <CartButton />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
