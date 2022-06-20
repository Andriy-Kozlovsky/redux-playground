import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import {sendCartData} from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: any) => state.ui.cartIsVisible);
  const cart = useSelector((state: any) => state.cart);
  const notification = useSelector((state: any) => state.ui.notification);

  useEffect(() => {
    // @ts-ignore
    dispatch(sendCartData(cart));
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
