import { Link } from "react-router";

function item({ item }) {
    return (
        <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex-1">
                    {item.description}
                </p>
                <div className="mt-auto">
                    <Link
                        to={`/wine/${item.id}`}
                        className="inline-block px-4 py-2 bg-red-900 text-white text-sm rounded-lg hover:bg-gray-700"
                    >
                        Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default item;
