import App from './App'
import React from 'react'
import Head from 'next/head'
import {Component} from 'react'
import axios from 'axios'
import storeFactory from '../store'
import {serverLink} from '../constants'
import SignIn from './SignIn'

export default class Index extends Component {

    static async getInitialProps() {

        const dbFetch = await axios(serverLink + '/productData')
        return {products: dbFetch.data}
    }

    render() {

        const {products} = this.props
        const store = storeFactory({products: products})

        return (

            <div>
                <Head>
                    <title>Title aayega yahan</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

                    <link rel="stylesheet" type="text/css" href="/static/semantic/dist/semantic.min.css"/>
                    <script
                        src="https://code.jquery.com/jquery-3.1.1.min.js"
                        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                        crossOrigin="anonymous"/>
                    <script src="/static/semantic/dist/semantic.min.js"/>
                    <link rel="stylesheet" href="/static/stylesheets/navbar.css"/>
                    <link rel="stylesheet" href="/static/stylesheets/index.css"/>
                    <link rel="stylesheet" href="/static/stylesheets/modal.css"/>
                </Head>

                {/*<App store={store}/>*/}
                <SignIn/>
            </div>
        )
    }
}