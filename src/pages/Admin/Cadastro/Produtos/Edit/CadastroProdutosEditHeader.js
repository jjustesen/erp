import React from "react";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import CadastroProdutosEditHeaderTabs from "./CadastroProdutosEditHeaderTabs";

const CadastroProdutosEditHeader = ({ user }) => {
  return (
    <CrudHeader
      nome={user?.nome || ""}
      chip={[]}
      tabs={CadastroProdutosEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroProdutosEditHeader;
