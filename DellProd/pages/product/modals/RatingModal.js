import {Component} from 'react'
import RatingStars from './stars/RatingStars'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class RatingModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui mini modal rating">
                <div className="header">Review your product</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <RatingStars starRates={} ratingUpdate={}/> {'To be completed'}
                        <button className="ui button complaint-button-pad" onClick={() => backModal(info.asin)}>Go
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}