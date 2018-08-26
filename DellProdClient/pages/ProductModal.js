import {Component} from 'react'
import PropTypes from 'prop-types'
import {buyProduct, viewProduct} from "../actions";

class ProductModal extends Component {

    render() {

        const {store} = this.context
        const {buy, review, complaint, complaintFeedback, info, b2h} = this.props
        const {productsBought} = store.getState().customerMeta

        let isBought = 0
        let ongoingComplaint = 0

        console.log(productsBought)

        productsBought.forEach(item => {

            if (item.asin === info.asin) {
                isBought = 1
                item.complaint ? (item.complaint.onGoing ? ongoingComplaint = 1 : null) : null
            }
        })

        return (

            <div className="ui segment main">
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
                                            onClick={() => {
                                                store.dispatch(buyProduct(info.asin, info.categories))
                                                buy(info)
                                            }}>Buy Now
                                        $ {info.price}</button>}
                            </div>
                            <div className="ui segment centered">
                                {(!isBought || ongoingComplaint) ?
                                    <button className="ui button red disabled">Issue
                                        Complain</button> :
                                    <button className="ui button red" onClick={() => complaint(info)}>Issue
                                        Complain
                                    </button>}
                            </div>
                            <div className="ui segment centered">
                                {!isBought ?
                                    <button className="ui pink button disabled">Review</button> :
                                    <button className="ui pink button" onClick={() => review(info)}>Review
                                    </button>}
                            </div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                {(!isBought || !ongoingComplaint) ?
                                    <button className="ui orange button disabled">Complaint Feedback
                                    </button> :
                                    <button className="ui orange button"
                                            onClick={() => complaintFeedback(info)}>Complaint Feedback
                                    </button>}
                            </div>
                            <div className="ui segment centered">
                                <button className="ui button" onClick={() => b2h()}>Go Back</button>
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