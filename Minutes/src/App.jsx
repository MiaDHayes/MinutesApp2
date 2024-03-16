import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { UserProvider } from './UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Main />
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
