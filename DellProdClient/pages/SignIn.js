import {Component} from 'react'
import HeadComp from './HeadComp'
import {serverLink} from '../constants'
import axios from 'axios'

export default class SignIn extends Component {

    submit = async e => {

        e.preventDefault()

        let {_username, _password} = this.refs
        _username = _username.value
        _password = _password.value

        const {data} = await axios.post(serverLink + '/login', {user: _username})

        if (!data)
            return alert('Invalid User')

        window.location = '/UserStore/' + _username
    }

    componentDidMount() {

        if (localStorage['user'] && localStorage['redux-store']) {

            axios.post(serverLink + '/sessionData', JSON.parse(localStorage['redux-store']))
                .then(res => {

                    delete localStorage['user']
                    delete localStorage['redux-store']
                })
        }
    }

    render() {

        return (
            <div className="custom-form">
                <HeadComp/>
                <div className="ui container segment">
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
            </div>
        )
    }
}