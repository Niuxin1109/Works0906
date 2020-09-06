import React from 'react'
import Loadable from '@@/Loadable'

const Basic = Loadable(() => import('@/layout/Basic'))  // basic.js
const App = Loadable(() => import('@/pages/app')) // app.js
const Form = Loadable(() => import('@/pages/form')) // form.js
const Home = Loadable(() => import('@/pages/home'))
const Detail = Loadable(() => import('@/pages/detail'))
const Lx = Loadable(() => import('@/pages/lx'))
const List = Loadable(() => import('@/pages/list'))
const Login = Loadable(() => import('@/pages/login'))
const Hoc = Loadable(() => import('@/pages/hoc'))
const Hook = Loadable(() => import('@/pages/hook'))

export {
  App,
  Home,
  Login,
  Detail,
  Lx,
  List,
  Form,
  Basic,
  Hoc,
  Hook,
}
