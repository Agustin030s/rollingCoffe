import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductoAPI } from "../../helpers/queries";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(async () => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await leerProductoAPI();
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      setProductos(data);
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <Row className="align-items-center justify-content-sm-center">
        <Col md="8">
          <h1 className="display-3">Productos Disponibles</h1>
          <hr />
        </Col>
        <Col md="4" className="text-md-end text-center">
          <Link className="btn btn-primary" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </Col>
      </Row>
      <Table responsive striped hover bordered className="my-4">
        <thead className="text-center">
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
