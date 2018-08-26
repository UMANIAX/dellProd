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
import BoughtModal from "./BoughtModal";
import ReviewModal from "./ReviewModal";
import ComplaintModal from "./ComplaintModal";
import ComplaintFeedBackModal from "./ComplaintFeedBackModal";

class User extends Component {

    state = {active: 'pane'}

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

    buyProduct = info => {
        this.props.store.dispatch(buyProduct(info.asin, info.categories))
        this.setState({active: 'buy', info: info})
    }

    reviewProduct = (info, review) => {
        // this.props.store.dispatch(reviewProduct(info.asin, review))
        this.setState({active: 'review', info: info})
    }

    complaintProduct = (info, complaint) => {
        // this.props.store.dispatch(complaintProduct(info.asin, complaint))
        this.setState({active: 'complaint', info: info})
    }

    complaintFeedback = (info, rating) => {
        // this.props.store.dispatch(complaintFeedback(info.asin, rating))
        this.setState({active: 'complaintFeedback', info: info})
    }

    render() {

        return (
            <div>

                <Navbar/>

                <div className="ui stackable four column grid">
                    <div className="three wide column side-menu"><SideMenu/></div>
                    {this.state.active === 'pane' ?
                        <div className="twelve wide column product-pane"><ProductPane showProduct={this.showProduct}/>
                        </div> : (this.state.active === 'product' ?
                            <ProductModal buy={this.buyProduct} review={this.reviewProduct}
                                          complaint={this.complaintProduct} complaintFeedback={this.complaintFeedback}
                                          info={this.state.info}/> : (this.state.active === 'buy' ?
                                <BoughtModal info={this.state.info}/> : (this.state.active === 'review' ?
                                    <ReviewModal info={this.state.info}/> : (this.state.active === 'complaint' ?
                                        <ComplaintModal
                                            info={this.state.info}/> : (this.state.active === 'complaintFeedback' ?
                                            <ComplaintFeedBackModal info={this.state.info}/> : null)))))}
                </div>

            </div>
        )
    }
}

User.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default User