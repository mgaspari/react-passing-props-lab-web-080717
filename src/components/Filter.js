// import React, { Component } from 'react';
//
// class Filter extends Component {
//   // constructor() {
//   //   super()
//   //   this.fetchFilters()
//   //   // super();
//   //   //
//   //   // this.state = {
//   //   //   filters: []
//   //   // };
//   // }
//
//   componentWillMount() {
//     this.fetchFilters();
//   }
//
//
//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.props.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }
//
// export default Filter;

import React from "react"

var Filter = (props) => {
  return(
    <div>
      <select onChange={props.handleChange}>
        <option value="all">All</option>
        {props.filters.map((filter) => {
          return  <option value={filter} key={filter}>{filter}</option>})
        }
      </select>
    </div>
  )
}



export default Filter











//
