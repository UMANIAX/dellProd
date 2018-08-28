import {Component} from 'react'
import PropTypes from 'prop-types'
import Complaint_Reviews from './reviewCards/Complaint_Reviews'
import {buyProduct, viewProduct} from "../actions";

class ProductModal extends Component {

    render() {

        const {store} = this.context
        const {buy, review, complaint, complaintFeedback, info, b2h} = this.props
        const {productsBought} = store.getState().customerMeta

        let isBought = 0
        let ongoingComplaint = 0

        productsBought.forEach(item => {

            if (item.asin === info.asin) {
                isBought = 1
                item.complaint ? (item.complaint.onGoing ? ongoingComplaint = 1 : null) : null
            }
        })

        let productReviews = undefined
        store.getState().products.forEach(item => item.asin === info.asin ? productReviews = item.reviews : null)

        const reviewData = productReviews.map(item => {

            const [review, username, date] = item.split('::::')
            return {review, username, date}
        })

        return (

            <div className="ui grid">
                <div className="twelve wide column">
                    <div className="ui raised segment container main product-modal">
                        <div className="header"><a className="ui red ribbon label">$ {info.price}</a></div>
                        <div className="image content" align="center">
                            <img className="image img-size" src={info.imgURL}/>
                            <div className="description">
                                <h2 className="ui header">
                                    <div className="content">
                                        {info.title}
                                        <div className="sub header">{info.description}</div>
                                    </div>
                                </h2>
                                <div className="ui grid centered button-len">
                                    <div className="three wide column">
                                        {isBought ?
                                            <button className="ui green button disabled">Buy Now</button> :
                                            <button className="ui green button"
                                                    onClick={() => {
                                                        store.dispatch(buyProduct(info.asin, info.categories))
                                                        buy(info)
                                                    }}>Buy Now</button>}
                                    </div>
                                    <div className="three wide column">
                                        {(!isBought || ongoingComplaint) ?
                                            <button className="ui button red disabled">Issue
                                                Complain</button> :
                                            <button className="ui button red" onClick={() => complaint(info)}>Issue
                                                Complain
                                            </button>}
                                    </div>
                                    <div className="three wide column">
                                        {!isBought ?
                                            <button className="ui pink button disabled">Review</button> :
                                            <button className="ui pink button" onClick={() => review(info)}>Review
                                            </button>}
                                    </div>
                                    <div className="three wide column">
                                        {(!isBought || !ongoingComplaint) ?
                                            <button className="ui orange button disabled">Complaint Feedback
                                            </button> :
                                            <button className="ui orange button"
                                                    onClick={() => complaintFeedback(info)}>Complaint Feedback
                                            </button>}
                                    </div>
                                </div>
                                <div className="go-back-but">
                                    <button className="ui button" onClick={() => b2h()}>Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="four wide column"><Complaint_Reviews reviews={reviewData}/></div>
            </div>
        )
    }
}

ProductModal.contextTypes = {
    store: PropTypes.object
}

export default ProductModal