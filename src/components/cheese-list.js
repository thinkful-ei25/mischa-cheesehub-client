import React, {Component} from 'react';
import fetchCheeses from '../actions/cheese'
import {connect} from 'react-redux';

export class CheeseList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }
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

const mapStateToProps = (state) => {
  return ({
    cheeses: state.cheeses
  })
}

export default connect(mapStateToProps)(CheeseList);