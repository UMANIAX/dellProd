import User from './User'
import React from 'react'
import {Component} from 'react'
import axios from 'axios'
import storeFactory from '../store'
import {serverLink} from '../constants'
import HeadComp from './HeadComp'

export default class UserStore extends Component {

    state = {loading: 1}

    user = null
    incomingData = null

    getInitialProps({ query: { id } }) {

        this.user = id
    }

    componentDidMount() {

        axios(serverLink + '/data/' + id).then(res => {
            this.incomingData = res.data
            this.setState({loading: 0})
        })
    }

    render() {

        const {products, customerMeta, customerML} = this.incomingData
        const store = storeFactory({products, customerMeta, customerML})

        return (
            <div>
                <HeadComp/>
                {!this.state.loading ? <User store={store}/> : <p/>}
            </div>
        )
    }
}