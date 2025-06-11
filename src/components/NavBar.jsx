import { useState } from "react";
import { Link } from "react-router";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import wines from "../winesData";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const uniqueCategories = [...new Set(wines.map((wine) => wine.category))];

    return (
        <header className="bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-red-900">
                    Rojo & Blanco
                </Link>

                {/* Categorías en pantallas grandes */}
                <div className="hidden md:flex space-x-6">
                    {uniqueCategories.map((category) => (
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
            {menuOpen && (
                <div className="md:hidden bg-gray-200 px-4 py-4 flex flex-col items-center space-y-3 shadow-md">
                    {uniqueCategories.map((category) => (
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
            )}
        </header>
    );
}

export default NavBar;
