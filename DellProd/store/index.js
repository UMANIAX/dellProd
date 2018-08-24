import {combineReducers, createStore} from 'redux'
import {products} from './reducers'

const storeFactory = (initState = {}) => {

    return createStore(
        products, // use combine reducers for multiple reducers
        initState // initial state
    )
}

export default storeFactory