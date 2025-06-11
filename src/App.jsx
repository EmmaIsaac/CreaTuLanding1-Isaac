import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "./components/ItemListContainer";

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
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
