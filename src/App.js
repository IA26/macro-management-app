import React from 'react';
import './App.css';
import ItemContainer from './containers/ItemContainer'
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {


state = {
  food: [],
  search: ""
};

  // componentDidMount() {
  //   fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/meat?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, {
  //     	"method": "GET",
  //     	"headers": {
  //     		"x-rapidapi-key": "6d374b39c8mshe47d179b0c5da0bp14c2bdjsna684b91be557",
  //     		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
  //     	}
  //     }).then(r => r.json())
  //     .then( (items) => {
  //       this.setState({
  //         food: items.hits
  //       })
  //     })                                                                  
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     this.handleChange = (e) => {
  //       fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${e}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, {
  //     	"method": "GET",
  //     	"headers": {
  //     		"x-rapidapi-key": "6d374b39c8mshe47d179b0c5da0bp14c2bdjsna684b91be557",
  //     		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
  //     	}
  //     }).then(r => r.json())
  //     .then( (items) => {
  //       this.setState({
  //         food: items.hits
  //       })
  //     })                                                                  
  //     .catch(err => { 
  //       console.log(err);
  //     })
  //     }

  //   };
  
  

 render(){
  //  console.log(

  return (
    <div className="content-wrap">
      <Switch>
       <Route path="/items" render component={() => <ItemContainer items={this.state.food} handleChange={this.handleChange} />} />
      </Switch>
    </div>
  );
 };



}
 

export default App;
