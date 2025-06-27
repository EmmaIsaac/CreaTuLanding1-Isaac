import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const documents = await getDocs(collection(db, "wines"));
    const products = [];

    documents.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id,
        });
    });
    return products;
};

// 1h 44min
