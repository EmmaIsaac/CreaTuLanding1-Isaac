import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc,
    writeBatch,
    serverTimestamp,
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

// export const createOrder = async (order) => {
//     const docRef = await addDoc(collection(db, "orders"), order);
//     return docRef.id;
// };

export const createOrder = async (cart, client, total) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    for (const item of cart) {
        const productRef = doc(db, "wines", item.id);
        const productSnap = await getDoc(productRef);

        if (!productSnap.exists()) {
            outOfStock.push({ ...item, reason: "Producto no encontrado" });
            continue;
        }

        const productData = productSnap.data();
        if (productData.stock >= item.count) {
            batch.update(productRef, {
                stock: productData.stock - item.count,
            });
        } else {
            outOfStock.push({
                ...item,
                available: productData.stock,
            });
        }
    }

    if (outOfStock.length > 0) {
        return { success: false, outOfStock };
    }

    const order = {
        client,
        products: cart,
        total,
        time: serverTimestamp(),
    };

    const orderRef = doc(collection(db, "orders"));
    batch.set(orderRef, order);

    await batch.commit();

    return { success: true, orderId: orderRef.id };
};
