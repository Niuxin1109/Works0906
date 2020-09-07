import { post, get } from '@/utils/request'
import api from '@/services/api'

export function addUser (options) {
  return {
    type: 'FETCH_ADDUSER',
    payload: post(api.addUser,options),
  }
}
export function userList (options) {
  return {
    type: 'FETCH_USERLIST',
    payload: post(api.userList,options),
  }
}



