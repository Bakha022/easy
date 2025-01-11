import axios from 'axios'
// import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { __END_POINT, TOKEN } from '../utils'

const request = axios.create({
	baseURL: __END_POINT,
	timeout: 10000,
})

// request.interceptors.request.use(
// 	function (response) {
// 		const token = localStorage.getItem(TOKEN)
// 		response.headers.Authorization = `Bearer ${token}`
// 		return response
// 	},
// 	function (error) {
// 		return Promise.reject(error)
// 	}
// )

// request.interceptors.response.use(
// 	function (response) {
// 		return response
// 	},
// 	function (error) {
// 		if (error.response && error.response.data) {
// 			toast.error(error.response.data)
// 		}
// 		return Promise.reject(error)
// 	}
// )

export default request
