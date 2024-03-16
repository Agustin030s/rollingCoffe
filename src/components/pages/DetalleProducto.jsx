import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductoCompleto from "./producto/ProductoCompleto";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    buscarProducto();
  }, []);

  const buscarProducto = async () => {
    const respuesta = await obtenerProductoAPI(id);
    if (respuesta.status === 200) {
      const productoBuscado = await respuesta.json();
      setProducto(productoBuscado);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
    }
  };

  const mostrarComponente = producto ? (
    <ProductoCompleto producto={producto}></ProductoCompleto>
  ) : (
    <Spinner animation="grow" variant="warning"></Spinner>
  );

  return (
    <Container className="my-5 mainContainer">
      {mostrarComponente}
    </Container>
  );
};

export default DetalleProducto;
