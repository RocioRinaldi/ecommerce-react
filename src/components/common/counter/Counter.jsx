import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>sumar</button>
      <h2>Contador = {contador}</h2>
      <button onClick={restar}>restar</button>

      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
