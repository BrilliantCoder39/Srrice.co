// humanReducer.js
import { SET_HUMAN } from '../actions/isHumanAction';

const initialState = false;

const humanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HUMAN:
      return action.payload;
    default:
      return state;
  }
};

export default humanReducer;
