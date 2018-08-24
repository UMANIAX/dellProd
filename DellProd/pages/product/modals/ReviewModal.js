import {Component} from 'react'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ReviewModal extends Component {

    submit = e => {

        e.preventDefault()

        let {_reviewData} = this.refs
        _reviewData = _reviewData.value

        console.log(_reviewData)
    }

    render() {

        const {info} = this.props

        return (

            <div className="ui tiny modal review">
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
                        </form><br/>
                        <button className="ui button complaint-button-pad" onClick={() => backModal(info.asin)}>Go
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}