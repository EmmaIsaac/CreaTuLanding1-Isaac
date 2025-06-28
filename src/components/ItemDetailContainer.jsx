import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../firebase/db";
import ItemDetail from "./ItemDetail";
import NotFound from "./NotFound";

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then((data) => {
                setItem(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-600">Cargando productos...</p>
            </div>
        );
    }

    if (item == null) {
        return <NotFound />;
    }

    return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
