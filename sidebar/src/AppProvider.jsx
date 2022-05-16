import React, { useContext } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  return <AppContext.Provider value={0}>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}
