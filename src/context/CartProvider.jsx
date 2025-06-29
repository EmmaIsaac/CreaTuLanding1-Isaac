import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // agregar productos al carrito
    const addToCart = (item) => {
        const isInCart = cart.some((prod) => prod.id === item.id);

        if (isInCart) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, count: prod.count + item.count };
                }
                return prod; // los demás productos no cambian
            });
            setCart(updatedCart);
        } else {
            //si el prosducto no está en el carrito, lo agregamos
            setCart([...cart, item]);
        }
    };

    //eliminar un producto del carrito
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id);
        setCart(updatedCart);
    };

    // sumar cantidades de productos en el carrito
    const getCount = () => {
        const countArray = cart.map((prod) => prod.count);
        const count = countArray.reduce((acc, current) => acc + current, 0);
        return count;
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, getCount }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
