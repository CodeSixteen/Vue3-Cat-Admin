/**
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validatePassword(rule: unknown, value: string) {
  if (!value.trim()) {
    return new Error('请输入登录密码')
  }
  if (value.trim().length < 2) {
    return new Error('密码小于2位，请检查密码输入是否正确')
  }
  return true
}
