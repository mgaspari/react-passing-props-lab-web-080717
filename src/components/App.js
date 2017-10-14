import React from 'react';

import FruitBasket from './FruitBasket';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      filters: [],
      currentFilter: "all",
      fruit: []
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => {
        this.setState({
          filters
        }, console.log(this.state.filters))
      });
  }

  // filtersSetter = (data) => {
  //   this.setState({
  //     filters: data
  //   })
  // }
  // change the filter setter to default...
  handleChange = (data) => {
    this.setState({
      currentFilter: data.target.value
    })
  }

  fruitSetter = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => {
        this.setState({
          fruit: items
        }, console.log(this.state.fruit))
      });

  }
  componentDidMount(){
    this.fruitSetter()
    this.fetchFilters()
  }

  render(){
    return(
      <div>
        {/* <button onClick={this.fruitSetter}>Click</button> */}
      <FruitBasket handleChange={this.handleChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter}   />
    </div>
    )
  }
// } = () => <FruitBasket />;
}

export default App;

// Turn all of this into a component
// Store all data here in state
// Pass everything to FruitBasket through props
// pass data from filter all the way up to app to its data
//then the list will re-render using the data it gets from app->fbasket
//*functions pass up data*
