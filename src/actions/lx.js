import { post } from '@/utils/request'
import api from '@/services/api'

export function regUser (options) {
  return {
    type: 'FETCH_REGUSER',
    payload: post(api.regUser, options)
  }
}


