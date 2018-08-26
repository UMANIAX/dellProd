import {Component} from 'react'

export default class ThankModal extends Component {

    render() {

        const {info, b2h} = this.props

        return (

            <div className="ui segment bought">
                <div className="header">Thank You</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <button className="ui button" onClick={() => b2h()}>Back to Home</button>
                    </div>
                </div>
            </div>
        )
    }
}