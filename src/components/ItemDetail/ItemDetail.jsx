import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css"; 

export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();
    const handleAddToCart = () => {
        addItem(item);
        window.alert("Película agregada con éxito");
    };
    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <button className="btn- bg-primary primary" onClick={handleAddToCart}>Agregar al carrito</button>
            </Item>
        </div>
    );
};
