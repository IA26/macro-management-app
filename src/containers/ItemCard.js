import React from 'react'

function Itemcard(props) {

let item = props.item
// console.log(item)
let {brand_name, nf_calories, item_name, nf_total_fat} = item

    return (
        <div className="item-card">
            <ul>
             <li> Brand: {brand_name}</li>
             <li> Item name: {item_name}</li> 
             <li> Cals: {Math.round(nf_calories)}</li> 
            </ul>
            
        </div>
    )
}


export default Itemcard;
