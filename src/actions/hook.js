import { post, get } from '@/utils/request'
import api from '@/services/api'

export function getMenu (options) {
  return {
    type: 'FETCH_HOOK_MENU',
    payload: post(api.menu),
  }
}

export function getMenuList (options) {
  return {
    type: 'FETCH_HOOK_LIST',
    payload: get(api.menuList, options),
  }
}

