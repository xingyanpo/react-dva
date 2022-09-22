import request from '../utils/request'

export function getCinemaListService() {
  return request('https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=9303403', {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
}