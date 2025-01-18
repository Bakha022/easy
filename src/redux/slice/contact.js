import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import request from '../../services/request'

const initialState = {
	data: null,
	loading: false,
}

export const contact = createAsyncThunk(
	'cv/contact_create/',
	async ({ credentials }) => {
		const contactData = await request.post('cv/contact_create/', credentials, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return contactData.data
	}
)

const contactSlice = createSlice({
	initialState,
	name: 'contact',
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(contact.pending, state => {
				state.loading = true
			})
			.addCase(contact.fulfilled, (state, action) => {
				state.loading = false
				toast.success('Информация отправлена, мы с вами свяжемся!')
				state.data = action.payload
			})
			.addCase(contact.rejected, state => {
				state.loading = false
			})
	},
})

const { name, reducer } = contactSlice

export const contactName = name

export default reducer
