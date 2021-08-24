import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppBar } from "../../components/organism/AppBar";

import CadastroClientes from "./Cadastro/Clientes";
import CadastroFuncionarios from "./Cadastro/Funcionarios";

const Admin = () => {
  return (
    <>
      <AppBar />
      <Box marginTop={8}>
        <Switch>
          <Route path="/clientes" component={CadastroClientes} />
          <Route path="/funcionarios" component={CadastroFuncionarios}></Route>
          <Route path="/quartos" />
          <Route path="/produtos">
            <>produtos</>
          </Route>
          <Route path="/caixa-geral">
            <>caixa-geral</>
          </Route>
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
