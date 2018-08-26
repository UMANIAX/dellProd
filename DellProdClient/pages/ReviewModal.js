import {Component} from 'react'
import ProductModal from "./ProductModal";
import PropTypes from "prop-types";
import {reviewProduct} from '../actions'
import axios from "axios/index";

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

class ReviewModal extends Component {

    submit = async e => {

        e.preventDefault()

        let {_reviewData} = this.refs
        _reviewData = _reviewData.value

        const {info, reviewed} = this.props
        const {store} = this.context

        const {reviewCount, reviewSentiment} = store.getState().customerML

        const {data} = await axios.get(`http://service-area.herokuapp.com/ibm?reviewText=${_reviewData}&reviewCount=${reviewCount}0&prevReviewScore=${reviewSentiment}`)
        const {score} = data

        store.dispatch(reviewProduct(info.asin, _reviewData, score))
        reviewed(info)
    }

    render() {

        const {info, b2p} = this.props

        return (

            <div className="ui segment review">
                <div className="header">Review your product</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <form onSubmit={this.submit}>
                            <div className="ui form">
                                <div className="field">
                                    <textarea ref="_reviewData" required/>
                                </div>
                            </div>
                            <br/>
                            <button className="ui button">Submit</button>
                        </form>
                        <br/>
                        <button className="ui button complaint-button-pad" onClick={() => b2p(info)}>Go
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

ReviewModal.contextTypes = {
    store: PropTypes.object
}

export default ReviewModal