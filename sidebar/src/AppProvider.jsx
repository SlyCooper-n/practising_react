import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false),
    [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <AppContext.Provider
      value={{
        modal: { isModalOpen, toggleModal },
        sidebar: { isSidebarOpen, toggleSidebar },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
