import { Button, Col, Container, Row, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <i class="bi bi-file-earmark-plus"></i>
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
          <tr>
            <td>1</td>
            <td>Capuccino</td>
            <td>$280</td>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="imgTabla"></Image>
            </td>
            <td>Cafeteria</td>
            <td className="text-center">
                <Button variant="warning" className="me-2 mb-2"><i class="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="me-2 mb-2"><i class="bi bi-trash3"></i></Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Capuccino</td>
            <td>$280</td>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="imgTabla"></Image>
            </td>
            <td>Cafeteria</td>
            <td className="text-center">
                <Button variant="warning" className="me-2 mb-2"><i class="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="me-2 mb-2"><i class="bi bi-trash3"></i></Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Capuccino</td>
            <td>$280</td>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="imgTabla"></Image>
            </td>
            <td>Cafeteria</td>
            <td className="text-center">
                <Button variant="warning" className="me-2 mb-2"><i class="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="me-2 mb-2"><i class="bi bi-trash3"></i></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
