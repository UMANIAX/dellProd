import {Component} from 'react'
import {complaintProduct} from "../actions"


const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ComplaintModal extends Component {

    submit = e => {

        e.preventDefault()

        let {_complaintData} = this.refs
        _complaintData = _complaintData.value

        const {info} = this.props
        const {store} = this.context

        store.dispatch(complaintProduct(info.asin, _complaintData))
    }

    render() {

        const {info} = this.props

        return (

            <div className="ui segment complaint">
                <div className="header">Register new Complaint</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <h4>{info.title}</h4>
                        <form onSubmit={this.submit}>
                            <div className="ui form">
                                <div className="field">
                                    <textarea ref="_complaintData" required/>
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