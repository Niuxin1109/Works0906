import { dispatch } from "../../node_modules/rxjs/internal/observable/pairs";

const defaultState = {
  name: 'detail',
  age: 25,

  username: '',
  password: '',
  checkbox: '',
}

// 详情的 reduce
export default function detail (state = defaultState, action) {
  switch (action.type) {
    case 'DETAIL_NAME':
      // 必须返回一个新对象
      return { ...state, name: action.payload }

    case 'AGE':
      return state

    default:
      return state
  }
}

// 页面 WebSocket 后台
// WebSocket 是一个长连接
// WebSocket 请求的地址 是 ws || wss 协议开头的
// 聊天系统 
    
    // 打开一个 web socket
    // var ws = new WebSocket('ws://localhost:9998/echo')
    
    // // 链接成功
    // ws.onopen = function () {
    //   ws.send('发送数据')
    //   alert('数据发送中...')
    // }
    
    // ws.onmessage = function (evt) { 
    //   // 存到 redux
    // }

    // ws.onclose = function () { 
    //   // 关闭 websocket
    // }濮阳
        
    // 介绍项目: 封装插件
    // 项目中遇到的问题 
    // 您还有什么想问的吗
    // 算法具体怎么对比的?
    // redux-thunk 解决哪些问题的 
    function name () {
      return dispatch => ({
        type: '',
        payload: 'xxxx',
      })
    }

    // 生命周期: shoul 说错了 ?
    // 上下左右居中 ? 有方法一起说完
    // 箭头函数 普通函数 说话太快了 少了一个 this ？
    没有自己的 this
    arguments
    this 定义固定不变了
    不能当类使用
    // promise 
    // const let 区别 
    // 电话答题 答完跟面试官说下 否则他会等你继续说
    // 闭包: 可以使用函数内变量的函数 使用过吗  封装公共方法
    // 防抖 节流 不对 ? 用在哪 滚动条滚动  onresize input 
    // 前端性能优化 背? 减少http <script src="1.js"> 图片 .webp 图片压缩 icon 雪碧图 懒加载 
    // react 父子组件传参 
    
    // render props
    // hook useState useEff useCallback useMemo useRef
    // hook 为什么写到最顶层: 因为 hook 按照顺序调用的

    // 函数组件 类组件 区别: 函数组件没有 state 也没有生命周期
    // 自己搭过框架吗
    // cookie 不要往沟里带自己 不会的不要提出来 ?
    // 为什么来杭州

    // redux 原理
    // 不要问一个问题 听不懂的样子 
    // nodejs 不会不要写 ?
    // 原型链 ?
    function name () {

    }
    name.prototype = {
      constructor: name,
      __proto__: Object.prototype,
    }

    const obj = new name()
    obj.age
    obj.__proto__ === name.prototype

    // eslint 规则 设置
    // 回退分支 git reset --hard ?
    // 看回退的分支 git reflog ?
    // 单页面 多页面 开发区别 ? 多页面整个页面刷新 单页面不刷新
    // 防抖 节流 实际运行多少次 ?

    // dva 原理: redux-sage + roadhog 框架的组合
    // 判断数据类型: typeof Object.prototype.toString.call(xxx) isArray
    // diff原理 虚拟DOM 和 真实DOM比较 
    // 为什么 0.1+0.2 ！= 0.3 // 浮点运算 

    // dev分支 -> 测试环境 （服务器）
    // pre分支 预发布环境 预上线环境（服务器）
    // master分支 上线环境（服务器）
    
    // 提测 -> QA测试 -> 改bug -> 代码提到dev分支 发布到测试环境 -> 基本没bug 
    // -> 代码合并到 pre分支 -> 发布到 预发布环境

    // 新项目 开发周期一个月 
    // 20天开发 10天测试

    // 7.1 - 8.1
    
    // 7.8号 后台陆陆续续接口 先出哪些页面接口 然后出哪些接口
    // 7.20号提测 8.1上线

    // mock RAP 

    // 2周迭代一个版本 1周开发 1周测试

  // http://mock/1.php
  // http://1.php


