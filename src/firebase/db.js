import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc,
} from "firebase/firestore";
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

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "wines"), where("category", "==", category));
    const documents = await getDocs(q);
    const products = [];

    documents.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id,
        });
    });
    return products;
};

export const getProductById = async (id) => {
    const docRef = doc(db, "wines", id);
    const document = await getDoc(docRef);

    if (document.exists()) {
        return {
            ...document.data(),
            id: document.id,
        };
    } else {
        return null;
    }
};

export const getCategories = async () => {
    const documents = await getDocs(collection(db, "wines"));

    const categories = new Set();

    documents.forEach((doc) => {
        const data = doc.data();
        if (data.category) {
            categories.add(data.category);
        }
    });

    return Array.from(categories);
};

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
};
