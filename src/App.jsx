import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <>
            <NavBar />
            <main className="container mx-auto px-4 py-4">
                <ItemListContainer mensaje="Explora nuestro catalogo" />
            </main>
        </>
    );
}

export default App;
