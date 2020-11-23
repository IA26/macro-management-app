import React from 'react'
import ItemCard from './ItemCard'

class Itemcontainer extends React.Component {

  state = {
    search: ""
  }
 
    // const [search, setSearch] = React.useState("");

    handleSearch = (e) => {
      this.setState({
        search: e.target.value
      })
      this.props.handleChange(this.state.search)
    }

    // console.log(search)

    // console.log(searchTerm)
    // let handleSearch = (e) => {
    //   this.handleChange(e)
    // }
    
   
    // console.log(this.items.map(console.log))
    render(){

      // console.log(this.props)

      let arrOfComponents = this.props.items.map( (itemObj, index) => {
        return <ItemCard item={itemObj.fields} key={index} />
    })

        return (
        <div className="items">
            <h1>Hi</h1>
            <form>
               <label htmlFor="search">Search for an item:</label>
               <input type="text" name="search" value={this.state.search}  onChange={this.handleSearch}/>
            </form>



            <div className="item-container">
              {arrOfComponents}
            </div>
        </div>
        )
    }

}

export default Itemcontainer;