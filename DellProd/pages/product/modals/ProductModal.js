import {Component} from 'react'

const buyModal = id => $(`#${id} .ui.modal.bought`).modal('show')
const reviewModal = id => $(`#${id} .ui.modal.review`).modal('show')
const complaintModal = id => $(`#${id} .ui.modal.complaint`).modal('show')

export default class ProductModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui modal main">
                <div className="header">{info.title}</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <p>{info.description}</p>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                <button className="ui green button" onClick={() => buyModal(info.asin)}>Buy Now $ {info.price}</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui button red" onClick={() => complaintModal(info.asin)}>Issue Complain</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui pink button" onClick={() => reviewModal(info.asin)}>Review</button>
                            </div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                <button className="ui primary button">Rate</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui orange button">Complain Feedback</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui button">Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}