import { Button, Image } from "react-bootstrap";

const ItemProducto = ({producto}) => {
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
        <Button variant="danger" className="me-2 mb-2">
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
