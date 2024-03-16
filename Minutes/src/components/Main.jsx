import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import CreateAccount from './CreateAccount'

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/createAccount' element={<CreateAccount />} />
            </Routes>
        </main>
    )
}

export default Main