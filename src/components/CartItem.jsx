function CartItem({ prod, removeProductFromCart }) {
    return (
        <li
            key={prod.id}
            className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                        {prod.name}
                    </h3>
                    <p className="text-gray-600">Cantidad: {prod.count}</p>
                    <p className="text-gray-600">Precio: ${prod.price}</p>
                </div>
                <button
                    onClick={() => removeProductFromCart(prod)}
                    className="bg-red-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition ml-6"
                >
                    Quitar
                </button>
            </div>
        </li>
    );
}

export default CartItem;
