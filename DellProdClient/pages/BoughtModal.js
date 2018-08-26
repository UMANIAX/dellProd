import {Component} from 'react'

export default class BoughtModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui segment bought">
                <div className="header">Thank You for Buying</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <button className="ui button">Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}