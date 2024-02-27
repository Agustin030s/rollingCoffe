import { Routes, Route } from "react-router-dom";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioProducto
              editar={false}
              titulo="Nuevo Producto"
            ></FormularioProducto>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioProducto
              editar={true}
              titulo="Editar Producto"
            ></FormularioProducto>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
