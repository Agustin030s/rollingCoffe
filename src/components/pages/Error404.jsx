import { Button, Image, Row, Col } from "react-bootstrap";
import error404 from "../../assets/error404.png";

const Error404 = () => {
  return (
    <section className="container my-5 mainContainer">
      <Row className="justify-content-center align-items-center text-center">
        <Col sm="12">
          <Image src={error404} fluid/>
        </Col>
        <Col sm="12">
          <Button>Volver al Inicio</Button>
        </Col>
      </Row>
    </section>
  );
};

export default Error404;
