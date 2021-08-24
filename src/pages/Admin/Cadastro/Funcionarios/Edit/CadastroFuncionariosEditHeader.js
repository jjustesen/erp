import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import { funcionariosById } from "../funcionarios";
import CadastroFuncionariosEditHeaderTabs from "./CadastroFuncionariosEditHeaderTabs";

const CadastroFuncionariosEditHeader = () => {
  const { id } = useParams();

  const user = useMemo(() => {
    return funcionariosById.find((cliente) => cliente.id === id);
  }, [id]);

  return (
    <CrudHeader
      nome={user.nome}
      chip={user.chip}
      tabs={CadastroFuncionariosEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroFuncionariosEditHeader;
