import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body = null) {
  return axios({
    method: method,
    url: `${process.env.REACT_APP_URL}/${endpoint}`,
    data: body
  }).catch(res => {
    console.log(res);
  });
}