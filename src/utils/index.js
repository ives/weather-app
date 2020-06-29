import moment from 'moment';

export const kelvinToCelcius = (kelvin) => Math.round(kelvin - 273.15);

export const prettyDate = (dt) => moment(dt * 1000).format('D MMM - HHa');