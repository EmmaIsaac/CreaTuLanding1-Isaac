import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    const { getCount } = useContext(CartContext);
    const count = getCount();
    return (
        <div className="flex items-center ml-4">
            <Link
                to={"/cart"}
                className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
                {count} <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </div>
    );
}
export default CartWidget;
