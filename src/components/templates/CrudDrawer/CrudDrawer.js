import React from "react";

import CrudDrawerContent from "./CrudDrawerContent";
import CrudDrawerProvider from "./CrudDrawerContext";

const CrudDrawer = ({ ...props }) => {
  return (
    <>
      <CrudDrawerProvider>
        <CrudDrawerContent {...props} />
      </CrudDrawerProvider>
    </>
  );
};

export default CrudDrawer;
