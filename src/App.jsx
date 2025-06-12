import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
