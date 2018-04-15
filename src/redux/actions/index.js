import { ADD_MONEY, REMOVE_MONEY } from '../types';

export const addMoney = (money, value = 10) => {
  return {
    type: ADD_MONEY,
    payload: money + value
  }
}

export const removeMoney = (money = 10, value = 10) => {
  return {
    type: REMOVE_MONEY,
    payload: money - value
  }
}