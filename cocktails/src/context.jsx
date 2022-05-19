import React, { useContext } from "react";

const AppContext = React.createContext(null);

export function AppProvider({ children }) {
  return <AppContext.Provider value={0}>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}
