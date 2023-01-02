import './App.css'
import {Navbar} from "./components"
import { AboutUs, Header } from './containers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  )
}

export default App
