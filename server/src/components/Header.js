import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <Link to='/'>Home页</Link>
            <br/>
            <Link to='/login'>Login页</Link>
        </div>
    )
}

export default Header