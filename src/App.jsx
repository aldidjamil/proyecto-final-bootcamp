import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
