import { configureStore } from '@reduxjs/toolkit'
import authReducer, { authName } from '../slice/auth'
import { Provider } from 'react-redux'

const rootReducer = {
	[authName]: authReducer,
}

const store = configureStore({reducer: rootReducer})

const StoreProvider = ({children}) => {
	return <Provider store={store}>{children}</Provider>
}


export default StoreProvider