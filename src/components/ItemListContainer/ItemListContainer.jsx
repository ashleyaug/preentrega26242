import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getProducts()
      .then((data) => { if (active) setProducts(data); })
      .catch((error) => { if (active) setErrors(error.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p role="alert">Error al cargar las películas: {errors}</p>;
  return (
    <section>
      <h1>Películas</h1>
      <ItemList products={products} />
    </section>
  );
};
