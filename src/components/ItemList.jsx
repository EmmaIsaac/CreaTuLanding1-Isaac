import Item from "./Item";

function ItemList({ items }) {
    return (
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                    <Item item={item} />
                </div>
            ))}
        </section>
    );
}

export default ItemList;
