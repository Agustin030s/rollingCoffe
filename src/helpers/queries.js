const URI_Producto = import.meta.env.VITE_API_PRODUCTO; //nombre variable de entorno

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    //estructura solicitud post
    const respuesta = await fetch(URI_Producto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET
export const leerProductoAPI = async () => {
  try {
    const respuesta = await fetch(URI_Producto);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET de un producto
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
