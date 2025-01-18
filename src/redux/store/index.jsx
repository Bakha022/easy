import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authReducer, { authName } from '../slice/auth'
import contactReducer, { contactName } from '../slice/contact'

const rootReducer = {
	[authName]: authReducer,
	[contactName]: contactReducer,
}

const store = configureStore({ reducer: rootReducer })

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider