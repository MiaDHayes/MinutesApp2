import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"


function Login() {
    const {setUserInfo, setIsLoggedIn} = useContext(UserContext)
    const [login, setLogin] = useState({
        username: '',
        password:''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInfo({ ...login, lastLogin: new Date(Date.now()).toLocaleString() })
        console.log(login)
        setIsLoggedIn(true)
        navigate('/')
    }

    return (
        <div>
            <h2> Log In </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor= "username"> Username </label>
                <input
                    type="text"
                    id="username"
                    value={login.username}
                    onChange={handleChange}
                />
                <label htmlFor= "password"> Password </label>
                <input
                    type="password"
                    id="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button type="submit"> Login </button>
            </form>
            <p>
                Don't have an account? <Link to="/createAccount"> Get with the times!</Link>
            </p>
        </div>
    )
}

export default Login