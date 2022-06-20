import {useSelector} from "react-redux";

const StatusBar = () => {
  const fetchMsg = useSelector((state: any) => state.status.fetch);
  const sendMsg = useSelector((state: any) => state.status.send);

  return (
    <section
      className={`flex justify-between bg-green-800 border-2 border-green-900 text-white py-0.5 px-3 ${
        sendMsg === "Enviando..." ? "bg-blue-600" : ""
      }`}
    >
      <p>
        Descarga: <span>{fetchMsg}</span>
      </p>
      <p>
        Envios: <span>{sendMsg}</span>
      </p>
    </section>
  );
};

export default StatusBar;
