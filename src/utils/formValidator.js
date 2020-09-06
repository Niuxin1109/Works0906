export default {
  // 验证是否为空
  isNonEmpty: (value, errorMsg) => {
    if (value === ''){ 
      return errorMsg
    }
  },

  // 限制最小长度
  minLength: (value, length, errorMsg) => { 
    if (value.length < length){ 
      return errorMsg 
    } 
  },

  // 手机号码格式
  isMobile: (value, errorMsg) => { 
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)){ 
      return errorMsg 
    } 
  },
}

