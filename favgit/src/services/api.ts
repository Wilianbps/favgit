import axios from 'axios'

const date = new Date()
date.setDate(date.getDate() - 7)
const formattedDate = date.toISOString().split('T')[0]

const api = axios.create({
  baseURL: `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&per_page=30`
})

export default api
