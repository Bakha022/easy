	import axios from 'axios'
	
	import toast from 'react-hot-toast'
	import { __END_POINT, TOKEN } from '../utils'

	const request = axios.create({
		baseURL: __END_POINT,
		timeout: 10000,
	})

	request.interceptors.request.use(
		function (config) {
			const token = localStorage.getItem(TOKEN)
			if (token) {
				config.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`
			}
			return config
		},
		function (error) {
			return Promise.reject(error)
		}
	)

	request.interceptors.response.use(
		function (response) {
			return response
		},
		function (error) {
			if (error.response && error.response.data) {
				toast.error(error.response.data?.message)
			}
			return Promise.reject(error)
		}
	)

	export default request
