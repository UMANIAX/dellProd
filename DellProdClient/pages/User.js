import Navbar from './Navbar'
import SideMenu from './SideMenu'
import ProductPane from './ProductPane'
import '../static/stylesheets/index.css'
import {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {serverLink} from '../constants'
import ProductModal from './ProductModal'
import {buyProduct, complaintFeedback, complaintProduct, reviewProduct, viewProduct} from "../actions";
import ThankModal from "./ThankModal";
import ReviewModal from "./ReviewModal";
import ComplaintModal from "./ComplaintModal";
import ComplaintFeedBackModal from "./ComplaintFeedBackModal";

class User extends Component {

    state = {active: 'pane', info: 0}

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {

        this.unsubscribe = this.props.store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    showProduct = info => {
        this.props.store.dispatch(viewProduct(info.asin, info.categories))
        this.setState({active: 'product', info: info})
    }

    thanks = info => {
        this.setState({active: 'buy', info: info})
    }

    backToHome = () => this.setState({active: 'pane', info: 'null'})

    backToProductModal = info => this.setState({active: 'product', info: info})

    reviewProduct = (info) => {
        this.setState({active: 'review', info: info})
    }

    complaintProduct = (info) => {
        this.setState({active: 'complaint', info: info})
    }

    complaintFeedback = (info) => {
        this.setState({active: 'complaintFeedback', info: info})
    }

    sideMenu = cat => this.setState({active: 'pane', info: cat})

    render() {

        return (
            <div>
                <Navbar user={this.props.store.getState().customerMeta.username}/>

                <div className="ui stackable four column grid">
                    {this.state.active === 'pane' ?
                        <div className="twelve wide column product-pane"><ProductPane cat={this.state.info}
                                                                                      showProduct={this.showProduct}/>
                        </div> : (this.state.active === 'product' ?
                            <ProductModal buy={this.thanks} review={this.reviewProduct}
                                          complaint={this.complaintProduct} complaintFeedback={this.complaintFeedback}
                                          info={this.state.info}
                                          b2h={this.backToHome}/> : (this.state.active === 'buy' ?
                                <ThankModal info={this.state.info}
                                            b2h={this.backToHome}/> : (this.state.active === 'review' ?
                                    <ReviewModal info={this.state.info}
                                                 reviewed={this.thanks}
                                                 b2p={this.backToProductModal}/> : (this.state.active === 'complaint' ?
                                        <ComplaintModal
                                            info={this.state.info}
                                            complaintPut={this.thanks}
                                            b2p={this.backToProductModal}/> : (this.state.active === 'complaintFeedback' ?
                                            <ComplaintFeedBackModal info={this.state.info}
                                                                    feedbackPut={this.thanks}
                                                                    b2p={this.backToProductModal}/> : null)))))}
                </div>

            </div>
        )
    }
}

User.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default User