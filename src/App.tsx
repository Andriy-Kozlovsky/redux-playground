import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: any) => state.ui.cartIsVisible);
  const cart = useSelector((state: any) => state.cart);
  const notification = useSelector((state: any) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        }),
      );
      await fetch("https://react-http-6384e-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent!",
        }),
      );
    };

    if (isInitial) {
      isInitial = false;

      return;
    }

    sendCartData().catch(() => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Something went wrong!",
        }),
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
