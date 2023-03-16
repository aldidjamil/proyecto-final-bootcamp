import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/App.routes'

const App = () => {
  return (
    <div className="App pb-5">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App