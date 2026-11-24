import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal } = useCart();

  const total = getCartTotal();

  return (
    <>
      <p>TOTAL A PAGAR:👉 ${total} </p>
      <button className="btn bg-success primary" disabled>
        FINALIZAR COMPRA
      </button>
      <p>La finalización de compra todavía no está disponible.</p>
    </>
  );
};
