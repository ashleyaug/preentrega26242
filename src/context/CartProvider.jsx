import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => setCart((current) =>
    current.some((product) => product.id === item.id)
      ? current.map((product) => product.id === item.id
        ? { ...product, quantity: product.quantity + 1 } : product)
      : [...current, { ...item, quantity: 1 }]
  );
  const removeItem = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const getCartTotal = () => cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  return <CartContext.Provider value={{ cart, addItem, removeItem, getCartTotal }}>{children}</CartContext.Provider>;
};
