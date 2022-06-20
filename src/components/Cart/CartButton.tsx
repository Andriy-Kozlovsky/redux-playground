const CartButton = () => {
  return (
    <button className="bg-transparent border-cian border-solid border rounded-md text-cian px-6 py-2 hover:bg-productButtonHover hover:text-white">
      <span className="mr-2">My Cart</span>
      <span className="bg-cian rounded-xl py-1 px-4 text-badgeTxt">1</span>
    </button>
  );
};

export default CartButton;
