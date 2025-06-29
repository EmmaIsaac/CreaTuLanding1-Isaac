import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function CartContainer() {
    const { cart, getTotal, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const total = getTotal();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-red-900">Carrito</h1>
            {cart.length === 0 ? (
                <>
                    <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
                        <p className="text-gray-600 text-lg">
                            Tu carrito está vacío.
                        </p>
                        <Link
                            to="/"
                            className="bg-red-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((prod) => (
                            <li
                                key={prod.id}
                                className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {prod.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            Cantidad: {prod.count}
                                        </p>
                                        <p className="text-gray-600">
                                            Precio: ${prod.price}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(prod)}
                                        className="bg-red-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition ml-6"
                                    >
                                        Quitar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Total: ${total}
                        </h2>
                        <button
                            onClick={() => navigate("/checkout")}
                            className="bg-red-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition"
                        >
                            Ir al checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartContainer;
