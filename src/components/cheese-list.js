import React, {Component} from 'react';

export default class CheeseList extends Component {
  render() {
    const cheeses = this.props.cheeses.map((cheese, idx) => {
      return (
        <li key={idx}>
          {cheese}
        </li>
      )
    })
    return(
      <ul>
        {cheeses}
      </ul>
    )
  }

}