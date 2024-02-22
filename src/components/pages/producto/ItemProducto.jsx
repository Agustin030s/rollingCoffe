import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductoAPI } from "../../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //agregar la logica que borre un producto mediante la api
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado!",
            text: `El producto "${producto.nombreProducto}" fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar tabla admin
          const respuestaProductos = await leerProductoAPI();
          if (respuestaProductos.status === 200) {
            const productosRestantes = await respuestaProductos.json();
            setProductos(productosRestantes);
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `Intenta está operación en unos minutos`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>$ {producto.precio}</td>
      <td className="text-center">
        <Image
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="imgTabla"
        ></Image>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-2 mb-2" onClick={borrarProducto}>
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
