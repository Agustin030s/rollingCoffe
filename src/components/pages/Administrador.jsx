import { Button, Col, Container, Row, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
  return (
    <Container className="my-4 mainContainer">
      <Row className="align-items-center justify-content-sm-center">
        <Col md="8">
          <h1 className="display-3">Productos Disponibles</h1>
          <hr />
        </Col>
        <Col md="4" className="text-md-end text-center">
          <Button>
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
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
