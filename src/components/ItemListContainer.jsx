import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import ItemList from "./ItemList";
import NotFound from "./NotFound";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {
        if (categoryName) {
            getProductsByCategory(categoryName.toLowerCase())
                .then((data) => {
                    setItems(data);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            getProducts()
                .then((data) => {
                    setItems(data);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [categoryName]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
    }

    if (items.length === 0) {
        return <NotFound />;
    }
    return (
        <>
            {categoryName ? (
                <h1 className="text-3xl text-gray-600 font-bold text-center my-4">
                    Selección vino {categoryName}
                </h1>
            ) : (
                <h1 className="text-3xl text-gray-600 font-bold text-center my-4">
                    Nuestro Catálogo de Vinos
                </h1>
            )}
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;
