import React from 'react'

function Itemcard(props) {
    console.log(props.item.brand_name)
    return (
        <div className="item-card">
            {props.item.brand_name}
        </div>
    )
}


export default Itemcard;
