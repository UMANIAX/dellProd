import User from './User'
import React from 'react'
import {Component} from 'react'
import axios from 'axios'
import storeFactory from '../store'
import {serverLink} from '../constants'
import HeadComp from './HeadComp'
import {changeInitState} from '../actions'

let store = null

export default class UserStore extends Component {

    static async getInitialProps({ query: { id } }) {

        const dbFetch = await axios(serverLink + '/data/' + id)
        return {incomingData: dbFetch.data, id: id}
    }

    componentDidMount() {

        localStorage['user'] = this.props.id
        localStorage['redux-store'] ? store.dispatch(changeInitState(JSON.parse(localStorage['redux-store']))) : null
    }

    render() {

        const {products, customerMeta, customerML} = this.props.incomingData
        store = storeFactory({products, customerMeta, customerML})

        return (
            <div>
                <HeadComp/>
                <User store={store}/>
            </div>
        )
    }
}