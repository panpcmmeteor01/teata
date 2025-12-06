import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AsdaList } from "./asda/AsdaList";
import { AsdaCreate } from "./asda/AsdaCreate";
import { AsdaEdit } from "./asda/AsdaEdit";
import { AsdaShow } from "./asda/AsdaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"asd"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Asda"
          list={AsdaList}
          edit={AsdaEdit}
          create={AsdaCreate}
          show={AsdaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
