import {Component} from 'react'
import PropTypes from 'prop-types'
import {buyProduct} from '../../../actions'

class ProductModal extends Component {

    buyModal = (id, store, cat) => {

        $(`#${id} .ui.modal.bought`).modal('show')
        store.dispatch(buyProduct(id, cat))
    }

    reviewModal = id => $(`#${id} .ui.modal.review`).modal('show')
    complaintModal = id => $(`#${id} .ui.modal.complaint`).modal('show')
    complaintFeedbackModal = id => $(`#${id} .ui.modal.complaint-feedback`).modal('show')

    render() {

        const {info} = this.props
        const {store} = this.context
        const {productsBought} = store.getState().customerMeta
        let isBought = 0
        let ongoingComplaint = 0

        productsBought.forEach(item => item.asin === info.asin ? () => {

            isBought = 1
            item.complaint ? (item.complaint.onGoing ? ongoingComplaint = 1 : null) : null

        } : null)

        return (

            <div className="ui modal main">
                <div className="header">{info.title}</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <p>{info.description}</p>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                {isBought ?
                                    <button className="ui green button disabled">Buy Now $ {info.price}</button> :
                                    <button className="ui green button"
                                            onClick={() => this.buyModal(info.asin, store, info.categories)}>Buy Now
                                        $ {info.price}</button>}
                            </div>
                            <div className="ui segment centered">
                                {!isBought || ongoingComplaint ?
                                    <button className="ui button red disabled">Issue
                                        Complain</button> :
                                    <button className="ui button red" onClick={() => this.complaintModal(info.asin)}>Issue
                                        Complain
                                    </button>}
                            </div>
                            <div className="ui segment centered">
                                {isBought ?
                                    <button className="ui pink button disabled">Review</button> :
                                    <button className="ui pink button" onClick={() => this.reviewModal(info.asin)}>Review
                                    </button>}
                            </div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                {!isBought || !ongoingComplaint ?
                                    <button className="ui orange button disabled">Complaint Feedback
                                    </button> :
                                    <button className="ui orange button"
                                            onClick={() => this.complaintFeedbackModal(info.asin)}>Complaint Feedback
                                    </button>}
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