import Item from "./Item";

function ItemList({ items }) {
    return (
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <Item item={item} />
            ))}
        </section>
    );
}

export default ItemList;
