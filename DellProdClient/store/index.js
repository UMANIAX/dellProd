import {combineReducers, createStore, applyMiddleware} from 'redux'
import {products, customerMeta, customerML} from './reducers'

const saveToLocal = store => next => action => {

    next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
}

const storeFactory = (initState = {}) =>
    applyMiddleware(saveToLocal)(createStore)(
        combineReducers({products, customerMeta, customerML}), // use combine reducers for multiple reducers
        initState // initial state
    )

export default storeFactory