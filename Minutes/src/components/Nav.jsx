import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='navbar'>
            <ul>
                <Link to= '/'> Home </Link>
                <Link to= '/login'> Login </Link>
                <Link to= '/createAccount'> Create Account </Link>
            </ul>
        </nav>
    )
}

export default Nav