import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

function Checkout() {
    const { cart, getTotal } = useContext(CartContext);
    const total = getTotal();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        createOrder({
            client: {
                name,
                email,
                phone,
            },
            products: cart,
            total,
            time: serverTimestamp(),
        })
            .then(() => {
                alert("Pedido realizado con éxito");
                form.reset();
            })
            .catch((error) => {
                console.error("Error al crear el pedido:", error);
                alert(
                    "Hubo un error al procesar tu pedido. Inténtalo de nuevo más tarde."
                );
            });
    };

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);
    return (
        <div
            onSubmit={handleSubmit}
            className="flex justify-center pt-20 pb-10 px-4 bg-white"
        >
            <form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-red-900 text-center">
                    Checkout
                </h1>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-1 text-sm"
                        htmlFor="name"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-1 text-sm"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 mb-1 text-sm"
                        htmlFor="phone"
                    >
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-900 text-white py-2 rounded-md shadow hover:bg-gray-700 transition"
                >
                    Confirmar Pedido
                </button>
            </form>
        </div>
    );
}

export default Checkout;
