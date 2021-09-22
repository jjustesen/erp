import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import { caixaGeralById } from "../caixaGeral";
import FinanceiroCaixaGeralEditHeaderTabs from "./FinanceiroCaixaGeralEditHeaderTabs";

const FinanceiroCaixaGeralEditHeader = () => {
  const { id } = useParams();

  const user = useMemo(() => {
    return caixaGeralById.find((cliente) => cliente.id === id);
  }, [id]);

  return (
    <CrudHeader
      nome={user.nome}
      chip={user.chip}
      tabs={FinanceiroCaixaGeralEditHeaderTabs}
    ></CrudHeader>
  );
};

export default FinanceiroCaixaGeralEditHeader;
