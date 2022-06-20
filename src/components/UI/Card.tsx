const Card = ({children, whiteBg}: {children: React.ReactNode; whiteBg: boolean}) => {
  return (
    <section
      className={`mx-auto my-4 p-5 rounded-md ${
        whiteBg ? "bg-white max-w-xl text-blackd" : "bg-cartBg max-w-md text-white"
      }`}
    >
      {children}
    </section>
  );
};

export default Card;
