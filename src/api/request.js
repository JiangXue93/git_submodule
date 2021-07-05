import fetchJsonp from 'fetch-jsonp';
import HostObj from './host'

const Host = HostObj[process.env.REACT_APP_ENV]
const Api = '/api/data/list'
const DefaultParams = {
  aid: 32
}

const RequestJsonp = ({
  url,
  params = {}
}) => {
  let apiUrl = ''
  if (!url || url.length <= 0) {
    apiUrl = `${Host}${Api}`
  } else {
    apiUrl = url[0] === '/' ? `${Host}${url}` : `${Host}/${url}`;
  }

  const paramStr = Object.entries({ ...DefaultParams, ...params })
                    .map(i =>  i.join('='))
                    .join('&')

  return fetchJsonp(`${apiUrl}?${paramStr}`)
          .then(res => res.json())
          .then(res => {
            if (res.errno === 0) {
              return res.data
            } else {
              console.warn(`${res.errmsg} : ${apiUrl}?${paramStr}`)
              return res
            }
          })
}

export default RequestJsonp