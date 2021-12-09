import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import userMock from './service'

export function setupProdMockServer() {
  createProdMockServer([...userMock])
}