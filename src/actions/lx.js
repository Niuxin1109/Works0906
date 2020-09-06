import { post } from '@/utils/request'
import api from '@/services/api'

export function getData (options) {
  return {
    type: 'FETCH_LX_DATA',
    payload: post(api.listWithPage, options)
  }
}

export function setObj (options) {
  return {
    type: 'FETCH_LX_OBJ',
    payload: options,
  }
}
