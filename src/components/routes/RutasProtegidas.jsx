import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  //agregar la logica necesaria para chequear que alguien es admin
  const admin = JSON.parse(sessionStorage.getItem('loginRollingCoffe')) || null;
  if(!admin){
    //si no hay admin entonces
    return <Navigate to='/login'></Navigate>
  }else{
    //si soy el admin
    return children;
  }
};

export default RutasProtegidas;
