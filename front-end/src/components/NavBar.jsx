import {Link} from 'react-scroll'

const NavBar = () => {

    return (
        <>
        <div id='navbar-items' className='grid-span-1 col-start-2 justfiy-self-end text-lg p-2'>
          <ul >
          <Link to='aboutme' activeClass='active' smooth={true} duration={600} offset={-100}>
              <li className='hover:scale-105'>About Me</li>
            </Link>
            <Link to='projects' activeClass='active' smooth={true} duration={600} offset={-50}>
              <li className='hover:scale-105'>Projects</li>
            </Link>
            <Link to='experience' activeClass='active' smooth={true} duration={600} offset={-50}>
              <li className='hover:scale-105'>Experience</li>
            </Link> 
          </ul>
        </div>
        </>
    )
}


export default NavBar