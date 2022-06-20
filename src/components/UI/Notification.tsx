const Notification = ({
  title,
  status,
  message,
}: {
  title: string;
  status: string;
  message: string;
}) => {
  return (
    <section
      className={`flex justify-between px-20 align-middle py-3 text-white text-lg ${
        status === "success" ? "bg-green-700" : status === "pending" ? "bg-blue-700" : "bg-red-700"
      }`}
    >
      <h2 className="font-bold">{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
