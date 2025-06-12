function ItemDetail({ item }) {
    if (!item) {
        return (
            <div className="text-center py-10 text-gray-500">
                Cargando producto...
            </div>
        );
    }

    return (
        <div
            key={item.id}
            className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
            {/* Columna de información */}
            <div>
                <h1 className="text-3xl text-red-900 font-bold mb-4">
                    {item.name}
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                    Tipo: {item.category}
                </p>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-semibold text-red-900">
                    ${item.price}
                </p>
                <ul className="text-gray-700 space-y-1 mb-4">
                    <li>
                        <strong>Año:</strong> {item.year}
                    </li>
                    <li>
                        <strong>Bodega:</strong> {item.winery}
                    </li>
                    <li>
                        <strong>País:</strong> {item.country}
                    </li>
                    <li>
                        <strong>Uva:</strong> {item.grape}
                    </li>
                </ul>
            </div>

            {/* Columna de imagen */}
            <div>
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                ) : (
                    "No hay imagen disponible"
                )}
            </div>
        </div>
    );
}

export default ItemDetail;
