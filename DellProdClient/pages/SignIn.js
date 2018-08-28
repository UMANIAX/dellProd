import {Component} from 'react'
import HeadComp from './HeadComp'
import {serverLink} from '../constants'
import axios from 'axios'

export default class SignIn extends Component {

    state = {loading: 0}

    submit = async e => {

        this.setState({loading: 1})
        e.preventDefault()

        let {_username, _password} = this.refs
        _username = _username.value
        _password = _password.value

        // const {data} = await axios.post(serverLink + '/login', {user: _username})
        window.location = '/UserStore/' + _username
    }

    loaderHTML = () =>
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
                <div className="header">
                    Just one second
                </div>
                <p>We're fetching that content for you.</p>
            </div>
        </div>

    signIn = () =>
        <div className="custom-form">
            <HeadComp/>
            <div className={`ui container segment ${this.state.loading ? 'loading' : ''}`}>
                <form className="ui form" onSubmit={this.submit}>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" ref="_username"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" ref="_password"/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
            {this.state.loading ? this.loaderHTML() : <p/>}
        </div>

    componentDidMount() {

        if (localStorage['user']) {

            if (localStorage['redux-store']) {
                axios.post(serverLink + '/sessionData', JSON.parse(localStorage['redux-store']))
                delete localStorage['redux-store']
            }

            delete localStorage['user']
        }
    }

    render() {

        return (
            <div>
                {this.signIn()}
            </div>
        )
    }
}