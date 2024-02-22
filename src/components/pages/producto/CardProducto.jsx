import { Card, Button, Col } from "react-bootstrap";
const CardProducto = ({producto}) => {
  return (
    <Col md="3" className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={producto.imagen}
          fluid
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>{producto.descripcionBreve}</Card.Text>
          <Card.Text>
            <b>Precio: $ {producto.precio}</b>
          </Card.Text>
          <Card.Footer className="text-end">
            <Button variant="success">Ver más</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
