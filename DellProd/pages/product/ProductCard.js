import {Component} from 'react'
import ProductModal from './modals/ProductModal'
import BoughtModal from './modals/BoughtModal'
import ReviewModal from './modals/ReviewModal'
import ComplaintModal from './modals/ComplaintModal'
import ComplaintFeedbackModal from './modals/ComplaintFeedBackModal'
import PropTypes from "prop-types";
import {viewProduct} from '../../actions'

class ProductCard extends Component {

    showModal = (id, store, cat) => {

        $(`#${id} .ui.modal.main`).modal('show')
        store.dispatch(viewProduct(id, cat))
    }

    render() {

        const {info} = this.props
        const {store} = this.context

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
                          <button className={`modal-button ui teal button`} onClick={() => this.showModal(info.asin, store, info.categories)}>View</button>
                      </span>
                    </div>
                </div>
                <ProductModal info={info}/>
                <BoughtModal info={info}/>
                <ReviewModal info={info}/>
                <ComplaintModal info={info}/>
                <ComplaintFeedbackModal info={info}/>
            </div>
        )
    }
}

ProductCard.contextTypes = {
    store: PropTypes.object
}

export default ProductCard