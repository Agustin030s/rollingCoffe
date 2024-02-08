import { Button, Image } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Capuccino</td>
      <td>$280</td>
      <td className="text-center">
        <Image
          src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="imgTabla"
        ></Image>
      </td>
      <td>Cafeteria</td>
      <td className="text-center">
        <Button variant="warning" className="me-2 mb-2">
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-2 mb-2">
          <i class="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
