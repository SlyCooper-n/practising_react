import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext(null);

const initialState = {
  loading: false,
  error: true,
  searchTerm: "",
  cocktails: [],
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "LOADING" });

      const response = await fetch(url + state.searchTerm);
      const data = await response.json();

      console.log(data);

      if (!data.drinks) {
        dispatch({ type: "ERROR_NOT_FOUND" });
        return;
      }

      dispatch({ type: "DISPLAY_COCKTAILS", payload: data.drinks });
    }
    fetchData();
  }, [state.searchTerm]);

  function setSearchTerm(term) {
    dispatch({ type: "CHANGE_SEARCH_TERM", payload: term });
  }

  return (
    <AppContext.Provider value={{ state, functions: { setSearchTerm } }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
