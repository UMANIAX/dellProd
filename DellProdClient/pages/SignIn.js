import {Component} from 'react'
import HeadComp from './HeadComp'
import {serverLink} from '../constants'
import axios from 'axios'

export default class SignIn extends Component {

    submit = e => {

        e.preventDefault()
    }

    componentDidMount() {

        if (localStorage['user']) {

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
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}