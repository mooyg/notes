import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
})

export const fetcher = (url: string) =>
  axios
    .get(`http://localhost:8080${url}`, {
      headers: {
        Authorization: `id ${window.localStorage.getItem('qid')}`,
      },
    })
    .then((res) => res.data)
