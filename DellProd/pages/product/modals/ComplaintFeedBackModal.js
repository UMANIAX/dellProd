import {Component} from 'react'
import RatingStars from './stars/RatingStars'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ComplaintFeedBackModal extends Component {

    rating = 1
    updateRating = newRating => this.rating = newRating

    render() {

        const {info} = this.props

        return (

            <div className="ui small modal complaint-feedback">
                <div className="header">Please enter feedback of a specific complaint</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <div className="ui horizontal segments">
                            <div className="ui segment">
                                Group of radio buttons
                            </div>
                            {/*<div className="ui segment">*/}
                                <RatingStars currentRate={this.rating} update={this.updateRating}/>
                            {/*</div>*/}
                        </div>
                        <br/>
                        <button className="ui button">Submit</button>
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