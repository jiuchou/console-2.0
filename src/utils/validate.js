/**
 * Created by 315675275@qq.com(https://github.com/jiuchou) on 2019/04/13.
 * Account type:
 *  domain:     user for production
 *  jiuchou:    user for test frontend data
 * @param {string} str
 * @returns {Boolean}
 */
export function validUserid(str) {
  if (str.replace(/\D/g, '').length === 5 || str.trim() === 'jiuchou') {
    return true
  }
  return false
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
