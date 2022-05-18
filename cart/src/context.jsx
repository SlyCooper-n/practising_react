import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";

export const AppContext = React.createContext(null);

const initialState = {
  loading: false,
  products: data,
  total: 0,
  amount: data.length,
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
