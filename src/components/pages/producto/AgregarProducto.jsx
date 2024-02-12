import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AgregarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {
    console.log(producto);
  };

  return (
    <Container className="mainContainer">
      <h1 className="text-center display-3">Nuevo Producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como máximo 30 caracteres",
              },
            })
          }
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej. 1500"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 2,
                message: "Debe ingresar como minimo 2 números",
              },
              max: {
                value: 5,
                message: "Debe ingresar como máximo 5 números",
              },
            })
          }
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. archivo.png"
          ></Form.Control>
          <Form.Text className="text-danger">
            Debes ingresar un url de una imagen.
          </Form.Text>
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
          <Form.Text className="text-danger">
            Debes seleccionar una categoria.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripción Breve*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion breve"
            required
          ></Form.Control>
          <Form.Text className="text-danger">
            Debes ingresar la descripción breve.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion amplia"
            required
          ></Form.Control>
          <Form.Text className="text-danger">
            Debes ingresar la descripción amplia.
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
