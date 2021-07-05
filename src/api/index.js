import request from './request';

export const orderPhone = params => request({
  url: '/overseas/orderphone',
  params: {
    ...params
  }
})

export const getActivity = () => request({
  url: '/activity'
})
