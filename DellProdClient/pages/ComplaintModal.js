import {Component} from 'react'
import {complaintProduct} from "../actions"
import ProductModal from "./ProductModal";
import PropTypes from "prop-types";


const backModal = id => $(`#${id} .ui.modal.main`).modal('show')

class ComplaintModal extends Component {

    submit = e => {

        e.preventDefault()

        let {_complaintData} = this.refs
        _complaintData = _complaintData.value

        const {info, complaintPut} = this.props
        const {store} = this.context

        store.dispatch(complaintProduct(info.asin, _complaintData))
        complaintPut(info)
    }

    render() {

        const {info, b2p} = this.props

        return (

            <div className="ui segment complaint">
                <div className="header"><h3>Register new Complaint</h3></div>
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
                            <button className="ui button complaint-button-pad" onClick={() => b2p(info)}>Go
                                Back
                            </button>
                        </form><br/>

                    </div>
                </div>
            </div>
        )
    }
}

ComplaintModal.contextTypes = {
    store: PropTypes.object
}

export default ComplaintModal