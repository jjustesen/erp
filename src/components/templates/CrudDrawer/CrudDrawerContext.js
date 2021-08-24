import { createContext, useContext, useState } from "react";

const CrudDrawerContext = createContext();
const CrudDrawerProvider = ({ children }) => {
  const [crudDrawer, setCrudDrawer] = useState({});

  return (
    <CrudDrawerContext.Provider
      value={{
        crudDrawer,
        setCrudDrawer,
      }}
    >
      {children}
    </CrudDrawerContext.Provider>
  );
};

export const useCrudDrawer = () => {
  const context = useContext(CrudDrawerContext);
  const { crudDrawer, setCrudDrawer } = context;

  return { crudDrawer, setCrudDrawer };
};

export default CrudDrawerProvider;
