import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import wines from "../winesData";

function ItemDetailContainer() {
    const [item, setItem] = useState();

    const { itemId } = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(wines);
                }, 1000);
            });

        getProducts()
            .then((data) => {
                const wine = data.find((wine) => wine.id === Number(itemId));
                if (wine) setItem(wine);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
