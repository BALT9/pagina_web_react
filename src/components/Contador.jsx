import { useState } from "react";

function Contador(){
    // let titulo = "Contador en React";
    const [titulo,modificarTitulo] = useState("Contador en React");
    // let cantidad = 0;
    const [cantidad,modificarCantidad] = useState(0);
    // const [count, setCount] = useState(0);

    function incremento(){
        
        modificarCantidad(cantidad+1);
        
    }
    function decremento(){
        
        modificarCantidad(cantidad-1);

    }
    function cambiarTitulo(){
        modificarTitulo("Mi primer componente en React");
    }
    return(
    <>  
        <h1>{titulo}</h1>
        <button onClick={cambiarTitulo}>cambiar titulo</button> <br />
        <button onClick={incremento}>+</button>
        <p style={{color: "#00f", fontSize: "3em"}}>{cantidad}</p>
        <button onClick={decremento}>-</button>
    </>
    );
    
}

export default Contador;