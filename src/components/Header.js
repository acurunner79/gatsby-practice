import React from 'react'
import { Link } from 'gatsby' 
import * as headerStyles from './Header.module.scss'


const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.headerTitle}>I am Header</h1>
            <h2 className={headerStyles.headerSubtitle}>I'm another header</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/doesntexist">Doesn't Exist</Link>
        </div>
    )
}


export default Header