import { Row, Col, Image, Badge } from "react-bootstrap";

const ProductoCompleto = ({ producto }) => {
  return (
    <Row className="justify-content-center align-items-center">
      <Col md="6">
        <Image src={producto.imagen} rounded className="imgDetalle"></Image>
      </Col>
      <Col md="6">
        <Badge className="mb-2">{producto.categoria}</Badge>
        <h2 className="display-5">{producto.nombreProducto}</h2>
        <hr />
        <p className="lead">{producto.descripcionAmplia}</p>
        <p className="lead">
          <b>Precio: </b>
          <Badge pill bg="success">
            ${producto.precio}
          </Badge>
        </p>
      </Col>
    </Row>
  );
};

export default ProductoCompleto;
