import React from 'react'

function Itemcard(props) {
    console.log(props.item)
    return (
        <div className="item-card">
           <h3> Brand: {props.item.brand_name}</h3>
           <h3> Cals: {props.item.nf_calories}</h3> 
           <h3> Item name: {props.item.item_name}</h3> 
           <h3> Total Fat: {props.item.nf_total_fat}</h3>  
        </div>
    )
}


export default Itemcard;
