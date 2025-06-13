import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import NotFound from "./NotFound";
import wines from "../winesData";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    const uniqueCategories = [...new Set(wines.map((wine) => wine.category))];
    // Verifica si la categoría es válida
    const isCategoryValid =
        !categoryName || uniqueCategories.includes(categoryName.toLowerCase());

    useEffect(() => {
        setLoading(true);

        const getProducts = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(wines);
                }, 1000); //Simula un delay de la API
            });

        getProducts()
            .then((data) => {
                if (categoryName) {
                    const filtered = data.filter(
                        (wine) => wine.category === categoryName
                    );
                    setItems(filtered);
                } else {
                    setItems(data);
                }
            })
            .finally(() => setLoading(false));
    }, [categoryName]);

    if (!isCategoryValid) {
        return <NotFound />;
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
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
