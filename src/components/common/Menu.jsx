import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Coffee_Logo.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const logout = () =>{
    //quitar session del storage
    sessionStorage.removeItem('loginRollingCoffe');
    //limpiar el state
    setUsuarioLogueado("");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink end to="/registro" className="nav-link">
              Registro
            </NavLink>
            {usuarioLogueado.length > 0 ? (
              <>
              <NavLink end to="/administrador" className="nav-link">
                Administrador
              </NavLink>
              <Button>Logout</Button>
              </>
            ) : (
              <NavLink end to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
