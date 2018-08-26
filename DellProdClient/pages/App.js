import React from 'react'
import {Component} from 'react'
import Link from 'next/link'

export default class App extends Component {

    state = {user: undefined}

    componentDidMount() {

        this.setState({user: localStorage['user']})
    }

    render() {

        return (
            <div>
                {this.state.user ? <Link href={{pathname: '/UserStore', query: { id: this.state.user }}}
                                         as={`/UserStore/${this.state.user}`}><a>hello</a></Link> :
                    <Link href="/SignIn"><a>hello</a></Link>}
            </div>
        )
    }
}