import {Component} from 'react'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ReviewModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui tiny modal review">
                <div className="header">Review your product</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <div className="ui form">
                            <div className="field">
                                <textarea/>
                            </div>
                        </div><br/>
                        <button className="ui button" onClick={() => backModal(info.asin)}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}