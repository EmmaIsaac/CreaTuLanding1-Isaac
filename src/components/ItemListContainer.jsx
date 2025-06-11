import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import wines from "../winesData";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((resolve, reject) => {
                resolve(wines); // Carga todos los vinos
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
            .catch((error) => {
                console.error(error);
            });
    }, [categoryName]); // Se vuelve a ejecutar si cambia la categoría

    if (items.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
    }

    return <ItemList items={items} />;
}

export default ItemListContainer;
