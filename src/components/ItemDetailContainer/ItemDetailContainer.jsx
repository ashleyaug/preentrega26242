import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [itemDetail, setItemDetail] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItemDetail(null);
        setLoading(true);
        setErrors(null);

        fetch("/data/products.json")
        .then((res) => res.json())
        .then(data => {
            const item = data.find(product => String(product.id) === id);

            if (item) {
                setItemDetail(item);
                return;
            }
            throw new Error("Pelicula no encontrada.");
        })
        .catch((error) => setErrors(error.message))
        .finally(() => setLoading(false));
    }, [id]);

    if(loading) return <p>Cargando...</p>;
    if(errors) return <p>{errors}</p>;
    if(!itemDetail) return <p>Pelicula no encontrada.</p>;

  return  (
    <section>
        <h1>Detalles del producto</h1>
        <div className="products-container">
            <ItemDetail item={itemDetail} />
        </div>
    </section>
  )
};
