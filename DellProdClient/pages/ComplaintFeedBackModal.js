import {Component} from 'react'
import RatingStars from './stars/RatingStars'
import {complaintFeedback} from '../actions'
import PropTypes from "prop-types";
import axios from 'axios'

class ComplaintFeedBackModal extends Component {

    questions = [
        "1. When using our services recently, how would you rate the level of service?:",
        "2. Satisfaction with regards to how your problem was dealt with",
        "3. Rate the attitude and general demeanour of the customer service employee:",
        "4. Rate how well was the customer service employee informed on the subject matter:",
        "5. Satisfaction regarding the time to wait for the query to be answered:"
    ]

    state = {
        rateArr: this.questions.map(() => 1),
        loading: 0
    }

    questionnaire = ind =>
        <div className="ui horizontal segments" key={ind}>
            <div className="ui segment">
                {this.questions[ind]}
            </div>
            <div className="ui segment">
                <RatingStars currentRate={this.state.rateArr[ind]} index={ind} update={this.updateRating}/>
            </div>
        </div>

    updateRating = (index, newRating) => {
        let newArr = this.state.rateArr
        newArr[index] = newRating
        this.setState({rateArr: newArr})
    }

    submitRating = async e => {

        e.preventDefault()

        this.setState({
            rateArr: this.state.rateArr,
            loading: 1
        })

        const {info, feedbackPut} = this.props
        const {store} = this.context
        const {_complaintReview} = this.refs

        const sendData = {
            'username': localStorage['user'].toString(),
            'level of services you received': this.state.rateArr[0].toString(),
            'satisfied with how your problem was dealt': this.state.rateArr[1].toString(),
            'demeanour of the customer service employee': this.state.rateArr[2].toString(),
            'employee to be very well informed': this.state.rateArr[3].toString(),
            'wait for my query acceptable': this.state.rateArr[4].toString(),
            'Feedback': _complaintReview.value.toString()
        }

        const formData = new FormData()

        for (let key in sendData)
            formData.append(key, sendData[key])

        const {data} = await axios.post('https://service-area.herokuapp.com/customerSurvey', formData)
        const {score} = data

        store.dispatch(complaintFeedback(info.asin, score))
        feedbackPut(info)
    }

    render() {

        const {info, b2p} = this.props

        return (

            <div className={`ui segment complaint-feedback ${this.state.loading ? 'loading' : ''}`}>
                <div className="header"><h3>Please enter feedback of a specific complaint</h3></div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        {[...Array(this.questions.length)].map((item, index) => this.questionnaire(index))}
                        <br/>
                        <form onSubmit={this.submitRating}>
                            <div>
                            <p> Please describe your experience with our customer care sevice below :</p>
                                <textarea name="Feedback" rows="10" cols="80" ref="_complaintReview"/><br/>
                                <button className="ui button">Submit</button>
                                <button className="ui button complaint-button-pad" onClick={() => b2p(info)}>Go
                                    Back
                                </button>
                            </div>
                        </form>
                        <br/>
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