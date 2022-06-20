import {setFetch, setSend} from "./status-slice";

import {updateList} from "./index";

export const fetchData = () => async (dispatch: any) => {
  dispatch(setFetch("Cargando..."));

  const fetchRequest = async () => {
    const response = await fetch("https://react-http-6384e-default-rtdb.firebaseio.com/list.json");

    if (!response.ok) throw new Error("Error al cargar la lista");

    const data = await response.json();

    return data;
  };

  try {
    const data = await fetchRequest();

    if (data.length !== 0) {
      dispatch(updateList(data));
    }
    dispatch(setFetch("Listo!"));
  } catch (error) {
    dispatch(setFetch("Error!"));
  }
};

export const sendData = (data: any) => {
  return async (dispatch: any) => {
    dispatch(setSend("Enviando..."));

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6384e-default-rtdb.firebaseio.com/list.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) throw new Error("Error al enviar");
    };

    try {
      await sendRequest();
      dispatch(setSend("Enviado"));
    } catch (error) {
      dispatch(setSend(error));
    }
  };
};
