import {Link} from 'react-scroll'

const NavBar = () => {

    return (
        <>
        <div id='navbar-items' className='grid-span-1 col-start-2 justfiy-self-end'>
          <ul>
          <Link to='aboutme' activeClass='active' smooth={true} duration={600} offset={-100}>
              <li>About Me</li>
            </Link>
            <Link to='projects' activeClass='active' smooth={true} duration={600} offset={-50}>
              <li>Projects</li>
            </Link>
            <Link to='experience' activeClass='active' smooth={true} duration={600} offset={-50}>
              <li>Experience</li>
            </Link> 
            <li>Contact Me</li>
          </ul>
        </div>
        </>
    )
}


export default NavBar