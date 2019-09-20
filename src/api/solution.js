import request from '@/utils/request'

export function addCase(list) {
  return request({
    url: '/api/autosolution/case',
    method: 'post',
    data: list
  })
}

export function getCase(query) {
  return request({
    url: '/api/autosolution/case',
    method: 'get',
    params: query
  })
}
