import * as actions from "../actions/mainActions";

const ENDPOINT_URI = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=416f21735638892910fc788dbd92dc24';

export const fetchDataService = (dispatch) => 
   fetch(ENDPOINT_URI)
    .then(res => res.json())
    .then(res => dispatch(actions.fetchData(res)))
    .catch( err => dispatch( actions.fetchDataError('There has been a problem with your fetch operation')) );