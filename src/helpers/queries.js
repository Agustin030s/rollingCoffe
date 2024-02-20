const URI_Producto = import.meta.env.VITE_API_PRODUCTO; //nombre variable de entorno

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    //estructura solicitud post
    const respuesta = await fetch(URI_Producto, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

//GET
export const leerProductoAPI = async () =>{
  try {
    const respuesta = await fetch(URI_Producto);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}