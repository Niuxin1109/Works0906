import strategies from './formValidator'

function str (sName) {
  return sName.toLowerCase().replace(/^\_/, '').replace(/\_([a-zA-Z0-9])([a-zA-Z0-9]+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase()
  })
}

// 
class Validator {
  cache = []

  add (value, rule, errorMsg) {
    const { reg, mal = '' } = rule
    this.cache.push(() => {
      const arg = mal ? [value, mal, errorMsg] : [value, errorMsg]
      return strategies[reg](...arg)
    })
  }

  start () {
    const { cache } = this
    for (let i = 0, length = cache.length; i< length ; i++) {
      let val = cache[i]()
      if (val) {
        return val
      }
    }
  }
}

export {
  str,
  strategies,
  Validator,
}
