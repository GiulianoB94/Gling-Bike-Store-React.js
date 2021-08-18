const Item = (name,price,color,stock) => {
    return(
        <div className='item'>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <h4>{color}</h4>
            <h4>{stock}</h4>
        </div>
    )
}

export default Item;