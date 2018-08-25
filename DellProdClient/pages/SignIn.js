import {Component} from 'react'

export default class SignIn extends Component {

    submit = e => {

        e.preventDefault()
        alert('You goin nigga?')
    }

    componentWillUnmount() {

        alert('You goin nigga?')
    }

    render() {

        return (
            <div className="custom-form">
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