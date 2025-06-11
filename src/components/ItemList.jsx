import { Link } from "react-router";

function ItemList({ items }) {
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

export default ItemList;
