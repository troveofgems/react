import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import NavSearch from "./components/layout/Nav.Search";
import AppLogs from "./components/appLogs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLogModal from "./components/appLogs/AddLogModal";
import EditLogModal from "./components/appLogs/EditLogModal";
import AddTechModal from "./components/technicians/AddTechModal";
import TechListModal from "./components/technicians/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit(); // Inits Material JS
  });
  return (
    <Provider store={store}>
      <NavSearch />
      <div className={"container"}>
        <AddButton />
        <AddLogModal />
        <AddTechModal />
        <EditLogModal />
        <TechListModal />
        <AppLogs />
      </div>
    </Provider>
  );
}

export default App;
