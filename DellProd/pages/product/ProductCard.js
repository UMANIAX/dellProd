import {Component} from 'react'
import ProductModal from './modals/ProductModal'
import BoughtModal from './modals/BoughtModal'

const showModal = id => $(`#${id} .ui.modal.main`).modal('show')

export default class ProductCard extends Component {

    render() {

        const {info} = this.props

        return (

            <div className="ui link cards" id={info.asin}>
                <div className="card">
                    <div className="image">
                        <img src={info.imgURL}/>
                    </div>
                    <div className="content">
                        <div className="header">{info.title}</div>
                        <div className="meta">
                            <a>$ {info.price}</a>
                        </div>
                        <div className="description">
                            {info.description}
                        </div>
                    </div>
                    <div className="extra content">
                      <span className="right floated">
                          {info.categories}
                      </span>
                                <span>
                          <button className={`modal-button ui teal button`} onClick={() => showModal(this.props.info.asin)}>View</button>
                      </span>
                    </div>
                </div>
                <ProductModal info={info}/>
                <BoughtModal info={info}/>
            </div>
        )
    }
}
