import {Component} from 'react'
import RatingStars from './stars/RatingStars'
import {complaintFeedback} from '../actions'
import PropTypes from "prop-types";

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')
const submitRating = (rating, asin, store) => {

    store.dispatch(complaintFeedback(asin, rating))
}

class ComplaintFeedBackModal extends Component {

    state = {
        count: 1
    }

    updateRating = newRating => this.setState({count: newRating})

    render() {

        const {info} = this.props
        const {store} = this.context

        return (

            <div className="ui segment complaint-feedback">
                <div className="header">Please enter feedback of a specific complaint</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <div className="ui horizontal segments">
                            <div className="ui segment">
                                Rate your experience with our team
                            </div>
                            <div className="ui segment">
                                <RatingStars currentRate={this.state.count} update={this.updateRating}/>
                            </div>
                        </div>
                        <br/>
                        <button className="ui button" onClick={() => submitRating(this.state, info.asin, store)}>Submit</button>
                        <br/>
                        <button className="ui button complaint-button-pad" onClick={() => backModal(info.asin)}>Go
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

ComplaintFeedBackModal.contextTypes = {
    store: PropTypes.object
}

export default ComplaintFeedBackModal