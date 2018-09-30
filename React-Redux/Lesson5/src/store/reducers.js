import {SET_AGE, IS_STUDENT, SET_NAME} from './action-types';

const initialState = {
  name: '',
  age: 0,
  isStudent: false
};

export const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.age,
      };
    case IS_STUDENT:
      return {
        ...state,
        isStudent: !state.isStudent,
      };
    default:
      return state;
  }
};