// import React, { Component } from 'react';
//
// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   // componentWillMount() {
//   //   fetch('/api/fruit')
//   //     .then(response => response.json())
//   //     .then(items => this.setState({ items }));
//   // }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }
//
// export default FilteredFruitList;


import React from "react"

var FilteredFruitList = (props) => {
  return(
    <div>
      {props.currentFilter === "all" ? <p>{props.fruit.map(fruit => <span>{fruit.char}</span>)}</p>: <p>{props.fruit.filter(fruit => fruit.fruit_type === props.currentFilter).map(fruit => <span>{fruit.char}</span>)}</p>}
    </div>
  )
}

export default FilteredFruitList











//
