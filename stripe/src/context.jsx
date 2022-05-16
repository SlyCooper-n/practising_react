import React, { useContext, useState } from "react";

export const AppContext = React.createContext(null);

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false),
    [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  function toggleSubmenu() {
    setIsSubmenuOpen((prev) => !prev);
  }

  return (
    <AppContext.Provider
      value={{
        sidebar: { isSidebarOpen, toggleSidebar },
        submenu: { isSubmenuOpen, toggleSubmenu },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
