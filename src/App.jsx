import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div id='container' className='grid lg:grid-cols-6 md:grid-cols-4 mt-5 container'>
      <div id='navbar' className='grid grid-cols-1 mt-2.5 fixed'>
    <NavBar/>
      </div>
    <Outlet/>
    </div>
  )
}

export default App
