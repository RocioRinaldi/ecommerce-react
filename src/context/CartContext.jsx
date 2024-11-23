import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let isInCart = cart.some((el) => el.id === product.id); // booleano

    if (isInCart) {
      console.log("se ejecuta el if");

      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(nuevoArray);
    } else {
      console.log("se ejecuta el else");
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find((elemento) => elemento.id === id);

    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalAmount,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};