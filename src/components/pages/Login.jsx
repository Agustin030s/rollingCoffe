import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);
    //pedir a la api si existe el usuario
    if(iniciarSesion(usuario)){
      Swal.fire({
        title: "Bienvenido",
        text: `Ingresaste al sistema RollingCoffe`,
        icon: "success"
      });
      navegacion('/administrador');
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Las credenciales ingresadas son invalidas`,
        icon: "error"
      });
    }
  };

  return (
    <>
      <h1 className="text-center display-3 my-3">Inicio de Sesión</h1>
      <Container className="mainContainer my-3">
        <Row className="justify-content-center align-items-center">
          <Col md="4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  {...register("email", {
                    required: "Debe ingresar su email",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Debes ingresar un formato válido de email",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "El password es obligatorio",
                    minLength:{
                      value: 8,
                      message: "La contraseña debe tener como minimo 8 caracteres"
                    },
                    maxLength:{
                      value: 15,
                      message: "La contraseña debe tener como máximo 15 caracteres"
                    }
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
