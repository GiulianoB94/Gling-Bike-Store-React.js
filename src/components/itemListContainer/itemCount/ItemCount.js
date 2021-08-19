import React, {useState} from 'react';

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    
    
  
    const handleStock = {
        

        sumarStock:() => {
            if (stock===0){
                alert('Out of stock available')
            } else {
                setUnidades(unidades +1)
                setStock(stock -1)
            }
        },
        restarStock: () => {
            if (unidades === 0){
               alert ('1 (one) units minimum required') 
            } else {
                setUnidades(unidades -1)
                setStock(stock+1)
            } 

            }

        }



        return(
            <div className="Counter">
                <button onClick={handleStock.sumarStock} disabled={stock==='0'}>+</button>
                <p>{unidades}</p>
                <button onClick={handleStock.restarStock} disabled={stock==='0'}>-</button>
                <p>Available Stock: {stock} </p>
            </div>
        )
    }

export default ItemCount;