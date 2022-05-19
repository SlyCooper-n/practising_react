import React, { useContext } from "react";

const AppContext = React.createContext(null);

export function AppProvider({ children }) {
  <AppContext.Provider>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}
