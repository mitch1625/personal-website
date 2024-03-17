import {createBrowserRouter} from 'react-router-dom'
import App from "./App"
import HomePage from './pages/HomePage'
import Projects from './components/Projects'
import Experience from './components/Experience'


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index:true,
                element: <HomePage/>
            },
            {
              path:'projects/',
              element: <Projects/>
            },
            {
              path: 'experience/',
              element: <Experience/>
            }
        ],
    },
])

export default router