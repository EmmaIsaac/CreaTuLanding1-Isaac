import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header class="bg-white shadow-lg">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" class="text-2xl font-bold text-red-900">
                    Rojo & Blanco
                </a>
                <div class="hidden md:flex space-x-6">
                    <a
                        href="#"
                        class="nav-link text-gray-700 hover:text-red-900 transition-colors duration-300"
                    >
                        Tintos
                    </a>
                    <a
                        href="#"
                        class="nav-link text-gray-700 hover:text-red-900 transition-colors duration-300"
                    >
                        Blancos
                    </a>
                    <a
                        href="#"
                        class="nav-link text-gray-700 hover:text-red-900 transition-colors duration-300"
                    >
                        Rosados
                    </a>
                    <a
                        href="#"
                        class="nav-link text-gray-700 hover:text-red-900 transition-colors duration-300"
                    >
                        Espumantes
                    </a>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}
export default NavBar;
