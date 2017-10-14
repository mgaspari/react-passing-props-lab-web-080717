// import React, { Component }  from 'react';
//
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';
//
// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }
//
// export default FruitBasket;

import React from "react"
import Filter from "./Filter"
import FilteredFruitList from "./FilteredFruitList"
var FruitBasket = (props) => {
  return(
    <div>
    <Filter handleChange={props.handleChange} filters={props.filters}/>
    <FilteredFruitList fruit={props.fruit} currentFilter={props.currentFilter}/>
  </div>)
}

export default FruitBasket












//
