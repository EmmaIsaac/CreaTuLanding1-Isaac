import { useState, useEffect } from "react";
import { Link } from "react-router";
import wines from "../winesData";

function ItemListContainer() {
    const [items, setItems] = useState([]);

    const getProducts = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (wines.length > 0) {
                    resolve(wines);
                } else {
                    reject("No hay productos disponibles");
                }
            }, 2000);
        });
    useEffect(() => {
        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (items.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
    }
    return (
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((wine) => (
                <div
                    key={wine.id}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                    <img
                        src={wine.image}
                        alt={wine.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {wine.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 flex-1">
                            {wine.description}
                        </p>
                        <div className="mt-auto">
                            <Link
                                to={`/wine/${wine.id}`}
                                className="inline-block px-4 py-2 bg-red-900 text-white text-sm rounded-lg hover:bg-gray-700"
                            >
                                Detalle
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
export default ItemListContainer;
