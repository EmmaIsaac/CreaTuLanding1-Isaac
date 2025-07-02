import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

function Cart() {
    const { cart, getTotal, removeFromCart, clearCart } =
        useContext(CartContext);
    const navigate = useNavigate();

    const removeProductsFromCart = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Estas a punto de eliminar todos los productos del carrito.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#82181a",
            cancelButtonColor: "#364154",
            confirmButtonText: "Si, borrar",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire({
                    title: "Borrado!",
                    text: "El carrito ha sido vaciado.",
                    confirmButtonColor: "#82181a",
                    icon: "success",
                });
            }
        });
    };

    const removeProductFromCart = (product) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Estas a punto de eliminar ${product.name} del carrito.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#82181a",
            cancelButtonColor: "#364154",
            confirmButtonText: "Si, borrar",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(product);
                Swal.fire({
                    title: "Borrado!",
                    text: `${product.name} ha sido eliminado del carrito.`,
                    confirmButtonColor: "#82181a",
                    icon: "success",
                });
            }
        });
    };

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
                            <CartItem
                                prod={prod}
                                key={prod.id}
                                removeProductFromCart={removeProductFromCart}
                            />
                        ))}
                    </ul>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Total: ${total}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                            <button
                                onClick={() => removeProductsFromCart()}
                                className="bg-gray-700 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-800 transition"
                            >
                                Vaciar carrito
                            </button>
                            <button
                                onClick={() => navigate("/checkout")}
                                className="bg-red-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-red-950 transition"
                            >
                                Ir al checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
