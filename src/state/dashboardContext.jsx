import { createContext, useState } from "react";

const AppContext = createContext();

export const DashboardContext = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dataArr, setDataArr] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        selectedItem,
        setSelectedItem,
        dataArr,
        setDataArr,
        modalMode,
        setModalMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
