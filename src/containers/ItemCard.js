import React from 'react'

function Itemcard(props) {

let item = props.item
// console.log(item)
let {brand_name, nf_calories, item_name, nf_total_fat} = item

    return (
        <div className="item-card">
           <h3> Brand: {brand_name}</h3>
           <h3> Cals: {Math.round(nf_calories)}</h3> 
           <h3> Item name: {item_name}</h3> 
           <h3> Total Fat: {Math.round(nf_total_fat)}</h3>  
        </div>
    )
}


export default Itemcard;
