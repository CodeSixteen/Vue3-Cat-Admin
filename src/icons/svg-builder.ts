import { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'

const svgTitle = /<svg([^>+].*?)>/ // 匹配<svg></svg> 和 svg 标签的所有 Attribute
const widthOrHeight = /(width|height)="([^>].*?)"/g
const hasViewBox = /viewBox="([^>+].*?)"/g
const lineBreak = /(\r)|(\n)/g

/**
 * 通过 nodejs  fs 模块将 svg 文件转为字符串 <symbol> 标签数组
 * @param {string} dir 文件夹路径
 * @param {string} idPrefix symbol 标签 id 前缀
 * @returns {array}
 */
function findSVGFile(path: string, idPrefix: string): string[] {
  const svgResult = []
  const dirents = readdirSync(path, {
    withFileTypes: true
  })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      // 如果是文件夹，递归调用 findSVGFile(), 参数后面要拼接当前文件夹名和‘/’
      svgResult.push(...findSVGFile(`${path}${dirent.name}/`, idPrefix))
    } else {
      // 通过 toString 方法将 Buffer 数据转为字符串值。
      const svg = readFileSync(`${path}${dirent.name}`)
        .toString()
        // 清除换行符
        .replace(lineBreak, '')
        // 将宽高替换为 viewBox Attribute
        .replace(svgTitle, ($1: string, $2: string) => {
          let width = '0'
          let height = '0'
          let content = $2.replace(widthOrHeight, ($1: string, $2: string, $3: string) => {
            if ($2 === 'width') {
              width = $3
            } else if ($2 === 'height') {
              height = $3
            }
            return ''
          })
          if (!hasViewBox.test(content)) {
            content += ` viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPrefix}-${dirent.name.replace('.svg', '')}" ${content}>`
        })
        // 将 <svg> 替换为 <symbol>
        .replace('</svg>', '</symbol>')
      svgResult.push(svg)
    }
  }
  return svgResult
}

/**
 * 生成 svg sprites
 * @param {string} dirPath svg 文件夹路径
 * @returns {string} html
 */
export const svgBuilder = (dirPath: string, idPrefix: string): Plugin | undefined => {
  if (!dirPath) return
  const result = findSVGFile(dirPath, idPrefix)
  return {
    name: 'svg-transform',
    transformIndexHtml: (html): string => {
      return html.replace(
        '<body>',
        `<body>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;">
            ${result.join('')}
          </svg>
        `
      )
      return html
    }
  }
}
