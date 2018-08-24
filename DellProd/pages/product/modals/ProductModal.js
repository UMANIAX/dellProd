import {Component} from 'react'

const nextModal = id => $(`#${id} .ui.modal.bought`).modal('show')

export default class ProductModal extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui modal main">
                <div className="header">{info.title}</div>
                <div className="image content">
                    <img className="image img-size" src={info.imgURL}/>
                    <div className="description">
                        <p>{info.description}</p>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                <button className="ui green button" onClick={() => nextModal(this.props.info.asin)}>Buy Now $ {info.price}</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui button red">Issue Complain</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui pink button">Review</button>
                            </div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment centered">
                                <button className="ui primary button">Rate</button>
                            </div>
                            <div className="ui segment centered">
                                <button className="ui button">Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}