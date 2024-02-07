import { Image, Button, Card, Row, Col } from "react-bootstrap";
import CardProducto from "../CardProducto";

const Inicio = () => {
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
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </section>
    </>
  );
};

export default Inicio;
