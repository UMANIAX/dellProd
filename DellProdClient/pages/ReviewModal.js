import {Component} from 'react'
import ProductModal from "./ProductModal";
import PropTypes from "prop-types";
import {reviewProduct} from '../actions'
import axios from "axios/index";

class ReviewModal extends Component {

    state = {loading: 0}

    submit = async e => {

        e.preventDefault()
        this.setState({loading: 1})

        let {_reviewData} = this.refs
        _reviewData = _reviewData.value + '::::' + localStorage['user'] + '::::' + (new Date()).toString()

        const {info, reviewed} = this.props
        const {store} = this.context

        const {reviewCount, reviewSentiment} = store.getState().customerML

        const {data} = await axios.get(`https://service-area.herokuapp.com/ibm?reviewText=${_reviewData}&reviewCount=${reviewCount}0&prevReviewScore=${reviewSentiment}`)
        const {score} = data

        store.dispatch(reviewProduct(info.asin, _reviewData, score))
        reviewed(info)
    }

    render() {

        const {info, b2p} = this.props

        return (

            <div className={`ui segment review ${this.state.loading ? 'loading' : <p/>}`}>
                <div className="header"><h3>Review your product</h3></div>
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
                            <button className="ui button complaint-button-pad" onClick={() => b2p(info)}>Go
                                Back
                            </button>
                        </form>
                        <br/>
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