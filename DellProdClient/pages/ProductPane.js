import ProductCard from './ProductCard'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ProductPane extends Component {

    render() {

        const {cat} = this.props
        const {store} = this.context
        const {products} = store.getState()
        let displayProducts = products.filter(item => item.categories == cat)

        if (!displayProducts.length)
            displayProducts = products

        return (

            <div className="ui stackable five column grid">
                {displayProducts.map((item, index) => <div className="column" key={index}><ProductCard showProduct={this.props.showProduct} info={item}/></div>)}
            </div>
        )
    }
}

ProductPane.contextTypes = {
    store: PropTypes.object
}

export default ProductPane
