import "./Item.css";

export const Item = ({ name, description, price, image, genre, children }) => {
    return (
        <article className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p>{genre}</p>
            {children}
        </article>
    );
};
