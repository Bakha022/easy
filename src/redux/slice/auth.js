import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import request from '../../services/request'
import { REFRESH_TOKEN, TOKEN } from '../../utils/'

const initialState = {
	token: JSON.parse(localStorage.getItem(TOKEN)) || null,
	loading: false,
}

export const login = createAsyncThunk(
	'/account/login/',
	async ({ credentials, navigate }) => {
		const data = await request.post('/account/login/', credentials, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const { tokens } = data.data?.data
		const { access, refresh } = tokens

		localStorage.setItem(TOKEN, JSON.stringify(access))
		localStorage.setItem(REFRESH_TOKEN, JSON.stringify(refresh))
		navigate('/')

		return { token: access }
	}
)

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		logout(state, { payload: navigate }) {
			state.token = null
			localStorage.removeItem(TOKEN)
			navigate('/')
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.loading = true
				toast.loading('Loading...')
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.loading = false
				state.token = payload.token
				toast.dismiss()
				toast.success('Login successful!')
			})
			.addCase(login.rejected, state => {
				state.loading = false
				toast.dismiss()
				toast.error(payload || 'Something went wrong')
			})
	},
})

const { actions, reducer, name } = authSlice

export const { logout } = actions

export const authName = name

export default reducer