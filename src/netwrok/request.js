//实例Axios封装
import Axios from 'axios'

export function request(config) {
    const axios = Axios.create({
        baseURL: 'http://152.136.185.210:8000/api/h8',
        timeout: 20000
    })

    axios.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    return axios(config)
}
