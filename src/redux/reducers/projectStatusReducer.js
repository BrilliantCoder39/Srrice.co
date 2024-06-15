import { STYLEDVIEW } from '../actions/projectStactusAction';

const initialState = 'All';

const styledReducer = (state = initialState, action) => {
  switch (action.type) {
    case STYLEDVIEW:
      return action.payload;
    default:
      return state;
  }
};

export default styledReducer;