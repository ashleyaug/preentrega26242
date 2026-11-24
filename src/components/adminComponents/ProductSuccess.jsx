import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Pelicula cargada con exito</h2>
      <p>ID de la pelicula: {id}</p>
      <p>Podes cargar otra haciendo click en el boton.</p>

      <div className="success-actions">
        <Link className="btn bg-success primary" to="/admin">
          Cargar otra pelicula
        </Link>
      </div>
    </section>
  );
};