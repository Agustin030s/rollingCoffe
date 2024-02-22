import { Image, Button, Card, Row, Col } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, [])

  const obtenerProductos = async () =>{
    const respuesta = await leerProductoAPI();
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      setListaProductos(datos);
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error"
      });
    }
  }
  return (
    <>
      <section className="mb-4">
        <Image
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="bannerPrincipal"
        ></Image>
      </section>
      <section className="container mainContainer my-3">
        <h1 className="display-3 mb-4">Nuestros Productos</h1>
        <Row className="justify-content-around">
          {listaProductos.map(producto => <CardProducto key={producto.id} producto={producto}></CardProducto>)}
        </Row>
      </section>
    </>
  );
};

export default Inicio;
