import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({ auth: authReducer})
export type AppState = ReturnType<Typeof rootReducer>

const initialState: AppState = {
    auth: {
        isAuthenticated: false,
        user: null,
    },
}
    const storeFactory = () => {
        const hasAccesToken = localStorage.getItem('access_token')
        if(hasAccesToken) {
            initialState.auth.isAuthenticated = true
        }
        const store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk))
        )
        return store
    }
const store = storeFactory()    
export default store
