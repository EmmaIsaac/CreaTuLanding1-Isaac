import { useState, useEffect } from "react";
import { Link } from "react-router";
import CartWidget from "./CartWidget";
import { getCategories } from "../firebase/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [categories, setCategories] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <header className="bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-red-900">
                    Rojo & Blanco
                </Link>

                {/* Categorías en pantallas grandes */}
                <div className="hidden md:flex space-x-6">
                    {categories.map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category}`}
                            className="text-gray-700 hover:text-red-900 transition"
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Ícono de menú (visible solo en mobile) */}
                <button
                    className="md:hidden text-red-900 text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>

                <CartWidget />
            </nav>

            {/* Menú mobile desplegable */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-200 shadow-md ${
                    menuOpen
                        ? "max-h-96 opacity-100 py-4"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="flex flex-col items-center space-y-3">
                    {categories.map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category}`}
                            className="text-gray-700 hover:text-red-900 transition text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default NavBar;
