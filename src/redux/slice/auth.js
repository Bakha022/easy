import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { REFRESH_TOKEN, TOKEN, USER } from '../../constants/'
import request from '../../services/request'

const initialState = {
	token: JSON.parse(localStorage.getItem(TOKEN)) || null,
	loading: false,
}

export const register = createAsyncThunk(
	'/account/register/',
	async ({ credentials, navigate }) => {
		const data = await request.post('/account/register/', credentials, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const { tokens } = data.data?.data
		const { access, refresh } = tokens

		localStorage.setItem(TOKEN, JSON.stringify(access))
		localStorage.setItem(REFRESH_TOKEN, JSON.stringify(refresh))
		navigate('/prompt')

		return { token: access }
	}
)

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
		navigate('/prompt')

		return { token: access }
	}
)

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN)
			localStorage.removeItem(REFRESH_TOKEN)
			localStorage.removeItem(USER)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.loading = false
				state.token = payload.token
				toast.success('Вход выполнен успешно!')
			})
			.addCase(login.rejected, state => {
				state.loading = false
			})
			.addCase(register.pending, state => {
				state.loading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.loading = false
				state.token = payload.token
				toast.success('Регистрация прошла успешно!')
			})
			.addCase(register.rejected, state => {
				state.loading = false
			})
	},
})

const { actions, reducer, name } = authSlice

export const { logout } = actions

export const authName = name

export default reducer
