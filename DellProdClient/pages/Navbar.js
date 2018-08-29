import {NavLink} from 'react-router-dom'
import '../static/stylesheets/navbar.css'
import Link from 'next/link'

export default ({user}) =>
        <div className="ui inverted menu">
            <a className="item">
                <img className="imgDim" src="http://www.kenya-aircargo.com/wp-content/uploads/2018/03/iStock_000020875510Medium.jpg"/>
            </a>
            <a className="item">
                {user}
            </a>
            <Link href="/SignIn"><a className="item right">
                Log Out
            </a></Link>
    </div>