import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  return <ProductDetail key={id} id={id} />;
};

const ProductDetail = ({ id }) => {
  const [itemDetail, setItemDetail] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getProductById(id)
      .then((data) => { if (active) setItemDetail(data); })
      .catch((error) => { if (active) setErrors(error.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p role="alert">{errors}</p>;
  if (!itemDetail) return <p>Película no encontrada.</p>;
  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
