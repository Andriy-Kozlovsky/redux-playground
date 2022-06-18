## A repo dedicated to learning and practicing Redux

## Introduction by [Academind React Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) ⬇️

### 👉 Another look at state in React apps
- What is "Redux"? <br>
A **state managment system** for cross-component or app-wide state

- What is Cross-Component / App-Wide State? <br>
**Local State:** State that belongs to a single component<br>
**Cross-Component State:** State that affects multiple components (requires "prop chains" / "prop drilling")<br>
**App-Wide State:** State that affects the entire app (most / all components). E.g. user authentication status<br>

### 👉 Redux vs React Context
- React Context - Potential Disadvantages<br>
  - Complex Setup / Management (in big applications, lead to deeply nested JSX code and/or huge "Context Provider" compnents)
  - Performance (it isn´t optimized for high-frequency state changes)

### 👉 How Redux Works
- Core Redux Concepts
  - Central Data (State) Store.
  - Components can subscribe to the Store to get the data they need
      - Components don´t directly manipulate the data in the Store
      - They dispatch Actions which are forwarded by Redux to the Reducer Function
  - Reducer Function: mutates (=changes) Store Data
    - After changing State the function spits out the new State which will replace the State in the Data Store. When that data is updated in the Store, subscribed components are notified so they can update their UI.

### 👉 Exploring The Core Redux Concepts

    // INSTALLATION AND SETUP
    Terminal -> npm install redux

    const redux = require("redux");

    // REDUCER FUNCTION
    const counterReducer = (state = { counter: 0 }, action) => {
      if (action.type === "increment") {
        return {
        counter: state.counter + 1
        };
      }

      if (action.type === "decrement") {
        return {
        counter: state.counter - 1
        };
      }

      return state;
    };

    // STORE
    const store = redux.createStore(counterReducer);

    // SUBSCRIPTION
    const counterSubscriber = () => {
      const latestState = store.getState();
    }

    store.subscribe(counterSubscriber);

    // DISPATCH AN ACTION
    store.dispatch({ type: "increment" });
    store.dispatch({ type: "decrement" });