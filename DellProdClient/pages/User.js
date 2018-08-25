import Navbar from './menus/Navbar'
import SideMenu from './menus/SideMenu'
import ProductPane from './product/ProductPane'
import '../static/stylesheets/index.css'
import {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {serverLink} from '../constants'

class User extends Component {

    getChildContext (){
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

    render() {

        return(
            <div>

                <Navbar/>

                <div className="ui stackable four column grid">
                    <div className="three wide column side-menu"><SideMenu/></div>
                    <div className="twelve wide column product-pane"><ProductPane/></div>
                </div>

            </div>
        )
    }
}

User.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default User