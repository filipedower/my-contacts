import axios from 'axios'

const baseHost = process.env.REACT_APP_BASE_HOST;

const base = axios.create({
    baseURL: `${baseHost}`
})

export default base;