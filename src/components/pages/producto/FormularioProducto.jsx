import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI, modificarProductoAPI, obtenerProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioProducto = ({editar, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const {id} = useParams();
  const navegacion = useNavigate();

  useEffect(() =>{
    if(editar){
      cargarDatosProducto();
    }
  }, [])

  const cargarDatosProducto = async () =>{
    const respuesta = await obtenerProductoAPI(id);
    if(respuesta.status === 200){
      const productoBuscado = await respuesta.json();
      setValue("nombreProducto", productoBuscado.nombreProducto);
      setValue("precio", productoBuscado.precio);
      setValue("imagen", productoBuscado.imagen);
      setValue("categoria", productoBuscado.categoria);
      setValue("descripcionBreve", productoBuscado.descripcionBreve);
      setValue("descripcionAmplia", productoBuscado.descripcionAmplia);
    }
  }

  const onSubmit = async (producto) => {
    if(editar){
      //aqui agregar la solicitud a la api para editar
      const respuesta = await modificarProductoAPI(producto, id);
      if(respuesta.status === 200){
        Swal.fire({
          title: "Producto modificado",
          text: `El producto "${producto.nombreProducto}" fue modificado correctamente`,
          icon: "success"
        });
        //redireccionar
        navegacion('/administrador');
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${producto.nombreProducto}" no pudo ser modificado, intentelo nuevamente dentro de unos minutos`,
          icon: "error"
        });
      }
      console.log('aqui tendria que editar');
    }else{
      // Llamar a la funcion encargada de crear un producto
      const respuesta = await crearProductoAPI(producto);
      //agregar mensaje si el codigo es 201
      if(respuesta.status === 201){
        Swal.fire({
          title: "Producto creado",
          text: `El producto "${producto.nombreProducto}" fue creado correctamente`,
          icon: "success"
        });
        //limpiar formulario
        reset();
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${producto.nombreProducto}" no pudo ser creado, intentelo nuevamente dentro de unos minutos`,
          icon: "error"
        });
      }
    }
  };

  return (
    <Container className="mainContainer">
      <h1 className="text-center display-3">{titulo}</h1>
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
            })}
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
              // max: {
              //   value: 5,
              //   message: "Debe ingresar como máximo 5 números",
              // },
            })}
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
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png, jpg, jpeg, gif, png, svg)",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripción Breve*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion breve"
            {...register("descripcionBreve", {
              required: "La descripción breve es obligatoria",
              min: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              max: {
                value: 150,
                message: "Debe ingresar como máximo 150 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion amplia"
            {...register("descripcionAmplia", {
              required: "La descripción amplia es obligatoria",
              min: {
                value: 15,
                message: "Debe ingresar como minimo 15 caracteres",
              },
              max: {
                value: 300,
                message: "Debe ingresar como máximo 300 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
