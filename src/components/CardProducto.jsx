import { Card, Button, Col } from "react-bootstrap";
const CardProducto = () => {
  return (
    <Col md="4" className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card.Body>
          <Card.Title>Nombre Producto</Card.Title>
          <Card.Text>Descripción del producto</Card.Text>
          <Card.Text>
            <b>Precio: $280</b>
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
