import { useState } from "react";

function Carrito(){
    const [productos,setProductos] = useState(["teclado","monitor","mouse"]);
    const[producto,setProducto] = useState("cargador");
    const[carrito,setCarrito] = useState([]);

    function resgitrarProducto(){
        // productos.push(producto)
        let nuevosDatos = [...productos, producto]
        setProductos(nuevosDatos);
    }
    function agregarCarrito(x){
        let subirCarrito = [...carrito, x]
        setCarrito(subirCarrito);
    }
    function eliminarDelCarrito(i){
        let nuevoCarrito = [...carrito];
        nuevoCarrito.splice(i, 1);
        setCarrito(nuevoCarrito);
    }
    return(
        <>
        <h1>holaaa carrito</h1>
        {productos}
        <h3>listas map en React (misProductos)</h3>
        <input type="text" onChange={(e)=>{setProducto(e.target.value)}}/>
        <button onClick={resgitrarProducto}>registrar producto</button>
        <ol>
            {
                productos.map((x,pos)=>(
                    <li key={pos}>{x}
                        <button onClick={()=> agregarCarrito(x)}>+</button>
                    </li>
                    
                ))
               
            }
            
        </ol>
        <h3>mi carrito</h3>
        <table border="1"> 
        <tbody>
        {
                    carrito.map((item,pos)=>(
                        <tr key={pos}>

                            <td>
                                {item}
                                <button onClick={()=> eliminarDelCarrito(pos)}>-</button>
                            </td>
                            
                            
                        </tr>
                    ))
                }
        </tbody>
               
        </table>
        {/* {carrito} */}
        </>
    );
}
export default Carrito;