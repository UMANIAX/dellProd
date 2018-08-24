import {Component} from 'react'

const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ComplaintFeedBackModal extends Component {

    submit = e => {

        e.preventDefault()

        let {_complaintFeedbackData} = this.refs
        _complaintFeedbackData = _complaintFeedbackData.value

        console.log(_complaintFeedbackData)
    }

    render() {

        const {info} = this.props

        return (

            <div className="ui small modal complaint-feedback">
                <div className="header">Please enter feedback of a specific complaint</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <form onSubmit={this.submit}>
                            <div className="ui horizontal segments">

                                    <div className="ui segment">
                                        Group of radio buttons
                                    </div>
                                    <div className="ui segment">
                                        <textarea ref="_complaintData" required/>
                                    </div>
                            </div>
                            <br/>
                            <button className="ui button">Submit</button>
                        </form>
                        <br/>
                        <button className="ui button complaint-button-pad" onClick={() => backModal(info.asin)}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}