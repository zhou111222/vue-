import { post } from './index'
import { commonApi } from './apimap'

// 获取groupid
const getGroupId = params => post(commonApi.apiGetGroupId, params)

export {
  getGroupId
}
