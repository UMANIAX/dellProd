import {NavLink} from 'react-router-dom'
import '../static/stylesheets/navbar.css'
import Link from 'next/link'

export default ({user}) =>
        <div className="ui inverted menu">
            <a className="item">
                <img className="imgDim" src="/static/dell-logo.png"/>
            </a>
            <a className="item">
                {user}
            </a>
            <Link href="/SignIn"><a className="item right">
                Log Out
            </a></Link>
    </div>