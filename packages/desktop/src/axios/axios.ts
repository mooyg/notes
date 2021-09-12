import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
})

export const fetcher = (url: string) =>
  axios
    .get(`http://localhost:8080${url}`, {
      headers: {
        Auhtorization: JSON.parse(window.localStorage.qid),
      },
    })
    .then((res) => res.data)
