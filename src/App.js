import React from 'react';
import './App.css';
import ItemContainer from './containers/ItemContainer'
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {


state = {
  items: []
};

  componentDidMount() {
    fetch("https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat", {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "6d374b39c8mshe47d179b0c5da0bp14c2bdjsna684b91be557",
      		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
      	}
      }).then(r => r.json())
      .then( (items) => {
        this.setState({
          items: items.hits
        })
      })
      .catch(err => {
        console.log(err);
      })
    };
  


 render(){
  //  console.log(localStorage)
  return (
    <div className="content-wrap">
      <Switch>
       <Route path="/items" render component={() => <ItemContainer items={this.state.items} handleChange={this.handleChange} />} />
      </Switch>
    </div>
  );
 };


handleChange = (e) => {
  console.log(e.target.value)
}



}
 

export default App;
