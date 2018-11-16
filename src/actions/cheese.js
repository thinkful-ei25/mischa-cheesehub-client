import React from 'react';
const fetchCheesesRequest = () => {

};
const fetchCheesesSuccess = () => {
  
};
const fetchCheesesError = () => {
  
};
export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest(), fetchCheesesSuccess(), fetchCheesesError());
  return (
      fetch('/api/cheeses')
  )}