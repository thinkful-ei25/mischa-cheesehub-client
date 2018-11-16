
import {API_BASE_URL} from '../config';

export const FETCHCHEESESREQUEST = 'FETCHCHEESESREQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCHCHEESESREQUEST
});
export const FETCHCHEESESSUCCESS = 'FETCHCHEESESSUCCESS';
export const fetchCheesesSuccess = (cheeseList) => ({
  type: FETCHCHEESESSUCCESS,
  cheeseList
});
export const FETCHCHEESESERROR = 'FETCHCHEESESERROR';
export const fetchCheesesError = (err) => ({
  type: FETCHCHEESESERROR,
  err
});
const fetchCheeses = () => dispatch => {
  console.log(API_BASE_URL);
  dispatch(fetchCheesesRequest());

  return (
      fetch(`${API_BASE_URL}/api/cheeses/`, {
        method: 'GET'
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        dispatch(fetchCheesesSuccess(data))

      })
        .catch(err => dispatch(fetchCheesesError(err)))
  )
}
export default fetchCheeses;