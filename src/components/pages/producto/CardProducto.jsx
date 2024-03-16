import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({producto}) => {
  return (
    <Col md="3" className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={producto.imagen}
          className="cardImg"
          fluid
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text className="descProducto">{producto.descripcionBreve}</Card.Text>
          <Card.Text>
            <b>Precio: $ {producto.precio}</b>
          </Card.Text>
          <Card.Footer className="text-end">
            <Link className="btn btn-success" to={"/detalleProducto/" + producto.id}>Ver más</Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
