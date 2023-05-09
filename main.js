import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portafolio from './components/portafolio/Portafolio.js';
import Usuarios from './components/uSuarios/usuarios.js';
import TablaUsuarios from './components/tablaUsuarios/tablaUsuarios';
import Mensaje from './components/mensaje/mensaje.js';
import Administracion from './components/administracion/administracion.js';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Administracion />}>
          <Route index element={<Portafolio />}></Route>
          <Route index element={<Usuarios  />}></Route>
          <Route index element={<TablaUsuarios />}></Route>
          <Route path="./components/tablaUsuarios/tablaUsuarios" element={<Mensaje />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);