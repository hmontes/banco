import { ADD_MONEY, REMOVE_MONEY } from '../types';

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
    case REMOVE_MONEY:
      return { ...state, value: action.payload }
    default:
      return state;
  }
};