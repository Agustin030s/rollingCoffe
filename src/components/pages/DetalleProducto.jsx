import { Container, Row, Col, Image, Badge } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col md="6">
          <Image
            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fluid
            rounded
          ></Image>
        </Col>
        <Col md="6">
          <Badge className="mb-2">Bebida Caliente</Badge>
          <h2 className="display-5">Café Capuccino</h2>
          <hr />
          <p className="lead">Este cafe te va a deleitar con su espectacular gusto, esta hecho con cafe exportado de colombia (descipción amplia)</p>
          <p className="lead"><b>Precio: </b><Badge pill bg="success">$1500</Badge></p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
