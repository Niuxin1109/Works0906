import { post } from '@/utils/request'
import api from '@/services/api'

export function loginUser (options) {
  return {
    type: 'FETCH_LOGIN',
    payload: post(api.loginUser,options),
  }
}




