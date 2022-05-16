import React from "react";

const AppContext = React.createContext(null);

export function AppProvider(children) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}
