import axios from 'axios'

export const BASE_URL = 'https://test2-ratnov2.vercel.app/api'

export const $host = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

