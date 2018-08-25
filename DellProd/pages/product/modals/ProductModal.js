import {Component} from 'react'
import PropTypes from 'prop-types'
import {buyProduct} from '../../../actions'

const buyModal = (id, store, cat) => {

    $(`#${id} .ui.modal.bought`).modal('show')
    store.dispatch(buyProduct(id, cat))
}

const reviewModal = id => $(`#${id} .ui.modal.review`).modal('show')
const complaintModal = id => $(`#${id} .ui.modal.complaint`).modal('show')
const complaintFeedbackModal = id => $(`#${id} .ui.modal.complaint-feedback`).modal('show')

class ProductModal extends Component {

    render() {

        const {info} = this.props
        const {store} = this.context

        return (

            <div className="ui modal main">
                <div className="header">{info.title}</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <p>{info.description}</p>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                <button className="ui green button" onClick={() => buyModal(info.asin, store, info.categories)}>Buy Now $ {info.price}</button>
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
                                <button className="ui orange button" onClick={() => complaintFeedbackModal(info.asin)}>Complaint Feedback</button>
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

ProductModal.contextTypes = {
    store: PropTypes.object
}

export default ProductModal