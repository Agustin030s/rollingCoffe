import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

const AgregarProducto = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="mainContainer">
      <h1 className="text-center display-3">Nuevo Producto</h1>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-4">
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Capuccino"
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Debes ingresar un producto.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej. 1500"
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Debes ingresar un precio.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. archivo.png"
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Debes ingresar un url de una imagen.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select required>
            <option>Seleccione una categoria</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Debes seleccionar una categoria.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripción Breve*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion breve"
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Debes ingresar la descripción breve.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion amplia"
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Debes ingresar la descripción amplia.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
