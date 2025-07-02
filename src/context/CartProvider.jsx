import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const isInCart = cart.some((prod) => prod.id === item.id);

        if (isInCart) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, count: prod.count + item.count };
                }
                return prod;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (item) => {
        const updatedCart = cart.filter((prod) => prod.id !== item.id);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCount = () => {
        const countArray = cart.map((prod) => prod.count);
        const count = countArray.reduce((acc, current) => acc + current, 0);
        return count;
    };

    const getTotal = () => {
        const total = cart.reduce(
            (acc, prod) => acc + prod.price * prod.count,
            0
        );
        return total;
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                getCount,
                getTotal,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
