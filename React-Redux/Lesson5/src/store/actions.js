import {SET_AGE, IS_STUDENT, SET_NAME} from './action-types';

export const setName = name => ({
  type: SET_NAME,
  name: name
})

export const setAge = age => ({
  type: SET_AGE,
  age: age
})

export const isStudent = () => ({
  type: IS_STUDENT
})