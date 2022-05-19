import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

export const AppContext = React.createContext(null);

const initialState = {
  loading: false,
  products: [],
  total: 0,
  amount: 0,
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleAmount(id, calc) {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, calc: calc } });
  }

  function remove(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "LOADING" });

      const res = await fetch(
        "https://course-api.com/react-useReducer-cart-project"
      );
      const data = await res.json();

      dispatch({ type: "DISPLAY_CART", payload: data });
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.products]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        reducer: { remove, toggleAmount, clearCart },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
