import React, { Component } from 'react'
import ItemCard from './ItemCard'

function Itemcontainer(props) {
 

    let handleSearch = (e) => {
      props.handleChange(e)
    }
    
    // let arrOfComponents = props.items.map( (itemObj) => {
    //     return <ItemCard item={itemObj}/>
    // })
    console.log(props)
        return (
        <div className="items">
            <h1>Hi</h1>
            <form>
               <label htmlFor="search">Search for an item</label>
               <input type="text" onChange={handleSearch}/>
            </form>
        </div>
        )

}

export default Itemcontainer;