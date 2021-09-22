import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppBar } from "../../components/organism/AppBar";

import CadastroClientes from "./Cadastro/Clientes";
import CadastroFuncionarios from "./Cadastro/Funcionarios";
import CadastroHospedarias from "./Cadastro/Hospedaria";
import CadastroProdutos from "./Cadastro/Produtos";
import FinanceiroCaixaGeral from "./Financeiro/CaixaGeral";

const Admin = () => {
  return (
    <>
      <AppBar />
      <Box marginTop={8}>
        <Switch>
          <Route path="/clientes" component={CadastroClientes} />
          <Route path="/funcionarios" component={CadastroFuncionarios} />
          <Route path="/hospedarias" component={CadastroHospedarias} />
          <Route path="/produtos" component={CadastroProdutos} />
          <Route path="/caixa-geral" component={FinanceiroCaixaGeral} />
          <Route path="/caixa-diario">
            <>caixa-diario</>
          </Route>
        </Switch>
      </Box>
    </>
  );
};

export const Teste = () => {
  return <>teste</>;
};

export default Admin;
