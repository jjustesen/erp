import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import { clientesById } from "../clientes";
import CadastroClientesEditHeaderTabs from "./CadastroClientesEditHeaderTabs";

const CadastroClientesEditHeader = () => {
  const { id } = useParams();

  const user = useMemo(() => {
    return clientesById.find((cliente) => cliente.id === id);
  }, [id]);

  return (
    <CrudHeader
      nome={user.nome}
      chip={user.chip}
      tabs={CadastroClientesEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroClientesEditHeader;
