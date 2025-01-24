import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER } from '../../constants'
import request from '../../services/request'

const initialState = {
	data: JSON.parse(localStorage.getItem(USER)) || null,
	loading: false,
}

export const promptUser = createAsyncThunk(
	'cv/cv_create/',
	async ({ credentials, navigate }) => {
		const response = await request.post('/cv/cv_create/', credentials, {
			headers: { 'Content-Type': 'application/json' },
			timeout: 30000,
		})
		navigate('/result')
		return response?.data
	}
)

const promptSlice = createSlice({
	initialState,
	name: 'promptUser',
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(promptUser.pending, state => {
				state.loading = true
			})
			.addCase(promptUser.fulfilled, (state, { payload }) => {
				state.loading = false
				state.data = payload
				localStorage.setItem(USER, JSON.stringify(state.data))
			})
			.addCase(promptUser.rejected, state => {
				state.loading = false
			})
	},
})

const { reducer, name } = promptSlice

export const promptName = name

export default reducer
