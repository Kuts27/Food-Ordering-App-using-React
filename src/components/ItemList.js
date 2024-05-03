
const ItemList = (items) => {
    console.log(items)
    //console.log(items?.card?.info?.id)
    console.log(items?.card?.info)
    return(
        <div>R{items?.card?.info?.name}</div>
        // <div>
        //     { items.map((item) => ( <p>{item.card.card.info.name}</p>
        //     ))}
        // </div>
    )
}

export default ItemList