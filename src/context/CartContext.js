import { createContext, useContext } from "react";

export const CartContext = createContext(null);
export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart requiere CartProvider");
  return cart;
};
