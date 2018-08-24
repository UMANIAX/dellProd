import ProductCard from './ProductCard'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ProductPane extends Component {

    render() {

        const {store} = this.context
        const {products} = store.getState()

        return (

            <div className="ui stackable five column grid centered">
                {products.map((item, index) => <div className="column" key={index}><ProductCard info={item}/></div>)}
            </div>
        )
    }
}

ProductPane.contextTypes = {
    store: PropTypes.object
}

export default ProductPane
