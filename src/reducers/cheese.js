import React from 'react';
import {
  FETCHCHEESESREQUEST, 
  FETCHCHEESESSUCCESS, 
  FETCHCHEESESERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  err: null
}

 function reducer(state=initialState, action) {
  switch(action.type){
    case FETCHCHEESESREQUEST: 
      return ({
        ...state,
        loading: true
      })
    case FETCHCHEESESSUCCESS: 
      return({
        ...state,
        cheeses: action.cheeseList
      })
    case FETCHCHEESESERROR:
      return({
        ...state,
        err: action.err
      })
    default: 
      return state;
  }
};
export default reducer;