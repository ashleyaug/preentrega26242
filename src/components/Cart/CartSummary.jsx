import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal } = useCart();

  const total = getCartTotal();

  return (
    <>
      <p>TOTAL A PAGAR: 🤑 ${total} </p>
      <button className="checkout-button" disabled>
        FINALIZAR COMPRA
      </button>
    </>
  );
};
