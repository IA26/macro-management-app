import React from 'react'
import ItemCard from './ItemCard'

class Itemcontainer extends React.Component {

  state = {
    food: [],
    search: ""
  }


  componentDidMount() {
    fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${this.handleFilter()}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "6d374b39c8mshe47d179b0c5da0bp14c2bdjsna684b91be557",
      		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
      	} 
      }).then(r => r.json())
      .then( (items) => {
        this.setState({
          food: items.hits
        })
      })                                                                  
      .catch(err => {
        console.log(err);
      })
    };
 
    // handleFilter = (e) => {
    //   if (e) {
    //     this.setState({
    //       search: e.target.value
    //     })
    //     console.log(this.state.search)
    //     return this.state.search
    //   } else {
    //     return "cheese"
    //   }
  
    // }
  
    
    
    render(){
      console.log(this.state.search)

  

      let arrOfComponents = this.state.food.map( (itemObj, index) => {
        return <ItemCard item={itemObj.fields} key={index} />
    })

        return (
        <div className="items">
            <h1>Hi</h1>
            <form>
               <label htmlFor="search">Search for an item:</label>
               <input type="text" name="search" value={this.state.search}  onChange={this.handleFilter}/>
               <button>Submit</button>
            </form>



            <div className="item-container">
              {arrOfComponents}
            </div>
        </div>
        )
    }

}

export default Itemcontainer;