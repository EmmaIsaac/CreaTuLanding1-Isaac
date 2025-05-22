import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <div class="hidden md:flex items-center space-x-4">
            <button
                type="button"
                class="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
                4 <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
}
export default CartWidget;
