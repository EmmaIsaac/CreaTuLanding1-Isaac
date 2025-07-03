import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(1);

    const { addToCart, isInCart } = useContext(CartContext);

    const increment = () => {
        if (count > 0 && count < 5 && count < item.stock) setCount(count + 1);
    };
    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    const price = item?.price ?? 0; // usa 0 si item o item.price no existen
    const total = count * price;

    const showAlert = () => {
        Swal.fire({
            title: "¡Producto agregado!",
            text: `Has agregado ${count} unidad(es) de ${item.name} al carrito.`,
            icon: "success",
            confirmButtonColor: "#82181a",
            confirmButtonText: "Aceptar",
        });
    };

    const handleAddToCart = () => {
        showAlert();
        addToCart({ ...item, count });
    };

    const isItemInCart = isInCart(item);

    if (isItemInCart) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-2xl shadow-sm w-full max-w-xs">
            <div className="flex items-center gap-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
                >
                    -
                </button>
                <span className="text-xl font-semibold">{count}</span>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
                >
                    +
                </button>
            </div>
            <p className="text-gray-700 font-semibold">
                Total:
                <span className="text-red-900 font-semibold">
                    ${total.toFixed(2)}
                </span>
            </p>
            <button
                type="button"
                onClick={handleAddToCart}
                className="px-6 py-3 bg-red-900 text-white rounded-2xl transition 
             hover:bg-gray-700 
             disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
                Agregar al carrito
            </button>
            <p className="text-gray-700 italic text-sm">
                *Limite por compra: 5 u
            </p>
        </div>
    );
};

export default ItemCount;
