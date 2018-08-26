import {Component} from 'react'
import ProductModal from './ProductModal'
import BoughtModal from './BoughtModal'
import ReviewModal from './ReviewModal'
import ComplaintModal from './ComplaintModal'
import ComplaintFeedbackModal from './ComplaintFeedBackModal'
import PropTypes from "prop-types";
import {viewProduct} from '../actions'
import Link from 'next/link'

class ProductCard extends Component {

    render() {

        const {info} = this.props
        const {showProduct} = this.props

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
                        <button className={`modal-button ui teal button`} onClick={() => showProduct(info)}>View</button>
                      </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard