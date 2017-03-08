import { FETCH_WEATHER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        [action.payload.data.city.name]: action.payload.data,
        ...state,
      };
    default:
      return state;
  }
}
