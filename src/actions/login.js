import { post } from '@/utils/request'
import api from '@/services/api'

export function getLogin (options) {
  return {
    type: 'FETCH_LOGIN',
    payload: post(api.listWithPage),
  }
}




