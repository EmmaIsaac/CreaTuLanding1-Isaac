import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <main className="container mx-auto px-4 py-4">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:categoryName"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/wine/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<CheckoutForm />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
