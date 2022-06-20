import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <header>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <CartButton />
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
