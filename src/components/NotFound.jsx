import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
            <h1 className="text-6xl font-bold text-red-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">
                Página no encontrada
            </h2>
            <p className="text-gray-600 mb-6">
                Lo sentimos, la página que estás buscando no existe.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-900 text-white rounded-2xl hover:bg-gray-700 transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;
