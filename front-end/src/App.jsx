import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar"

function App() {

  return (
    <div>
      <div id='navbar'>
    <NavBar/>
      </div>
    <Outlet/>
    </div>
  )
}

export default App
