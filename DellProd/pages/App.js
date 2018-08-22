import Navbar from './menus/Navbar'
import SideMenu from './menus/SideMenu'
import ProductPane from './product/ProductPane'
import '../static/stylesheets/index.css'

export default () =>
    <div>

        <Navbar/>

        <div className="ui stackable four column grid">
            <div className="three wide column side-menu"><SideMenu/></div>
            <div className="twelve wide column product-pane"><ProductPane/></div>
        </div>

    </div>