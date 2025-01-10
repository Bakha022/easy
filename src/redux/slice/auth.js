import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from '../../services/request'
import { TOKEN } from '../../utils/'

const initialState = {
	token: JSON.parse(localStorage.getItem(TOKEN)) || null,
	loading: false,
}

export const login = createAsyncThunk(
	'account/login/',
	async ({ credentials, navigate }) => {
		const { data } = await request.post('account/login', credentials)
		const { tokens } = data.data
		console.log(tokens)
		navigate('/')
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
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.loading = false
				state.token = payload.token
			})
			.addCase(login.rejected, state=> {
				state.loading = false
			})
	},
})



const {actions, reducer, name} = authSlice



export const {logout} = actions

export const authName = name

export default reducer