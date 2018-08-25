import {combineReducers, createStore} from 'redux'
import {products, customerMeta, customerML} from './reducers'

const storeFactory = (initState = {}) => {

    return createStore(
        combineReducers({products, customerMeta, customerML}), // use combine reducers for multiple reducers
        initState // initial state
    )
}

export default storeFactory