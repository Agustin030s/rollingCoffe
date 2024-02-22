import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = ({producto}) => {

  const borrarProducto = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
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
