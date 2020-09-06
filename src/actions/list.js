import { FETCH_LIST_DATA } from '@/constants/actionTypes'

export function addData (options) {
  return {
    type: FETCH_LIST_DATA,
    payload: options
  }
}
