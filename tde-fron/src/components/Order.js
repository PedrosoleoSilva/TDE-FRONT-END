import { useState } from "react";

let array = [2,5,1,8,6,40,9,2,19,2];
let arraNovo = [];
const Order = () => {
const [OrderBay, SetOrder] = useState()

const sort = (a,b)=>{
    return(a-b)
}

const ArrayOrdenado = () =>{
    const OrdenacaoArray = array.sort(sort)
    SetOrder(OrdenacaoArray)

}
    return (
        <div>
            <button onClick={ArrayOrdenado}>Clique aqui!</button>
            <h4>{OrderBay}</h4>
        </div>
    );
}

export default Order;