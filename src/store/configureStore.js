import {createStore,combineReducers,applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import infraReducer from '../reducer/infraReducer'
import devicesReducer from '../reducer/devicesReducer'
import deviceViewReducer from '../reducer/showDevice'

const configureStore=()=>{
    const store=createStore(combineReducers({
        infra:infraReducer,
        devices:devicesReducer,
        viewDevice:deviceViewReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore