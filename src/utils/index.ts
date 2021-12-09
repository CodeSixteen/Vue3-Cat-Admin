/**
 * Created by Liwanbin on 21/11/25.
 */

/**
 * @returns {string}
 */
 export function timeFix(): string {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9
    ? '早上好'
    : hour <= 11
      ? '上午好'
      : hour <= 13
        ? '中午好'
        : hour < 20
          ? '下午好'
          : '晚上好'
}

/**
 * @returns {string}
 */
export function welcome(): string {
  const arr = [
    '休息一会儿吧~',
    '准备吃什么呢?',
    '喝杯水吧~',
    '我猜你可能累了。'
  ]
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
