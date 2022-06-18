import {useSelector, useDispatch} from "react-redux";

  const incrementHandler = () => {
    dispatch({type: "INCREMENT"});
  };

  const decrementHandler = () => {
    dispatch({type: "DECREMENT"});
  };


  const increaseHandler = () => {
    dispatch({type: "INCREASE", amount: 5});
  };


  const decreaseHandler = () => {
    dispatch({type: "DECREASE", amount: 5});
  };

  const toggleHandler = () => {

    dispatch({type: "TOGGLE"});
  };

  return (
    <div className={styles.counter}>
      <h1>Counter: Redux Basics</h1>
      <button className={styles["btn-toggle"]} onClick={toggleHandler}>
        Toggle counter
      </button>
      {show && (
        <>
          <p>{counter}</p>
          <div className={styles.btns}>
            <button onClick={decreaseHandler}>- 5</button>
            <button onClick={decrementHandler}>-</button>
            <button onClick={incrementHandler}>+</button>
            <button onClick={increaseHandler}>+ 5</button>
          </div>
        </>
      )}
    </div>

  );
};

export default Counter;
