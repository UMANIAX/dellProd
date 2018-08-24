import {Component} from 'react'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class BoughtModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui modal bought">
                <div className="header">Thank You for Buying</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <button className="ui button" onClick={() => backModal(this.props.info.asin)}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}