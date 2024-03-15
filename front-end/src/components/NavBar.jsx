import {Link} from 'react-scroll'

const NavBar = () => {

    return (
        <>
        <ul id='navbar-items'>
        <Link to='aboutme' activeClass='active' smooth={true} duration={600} offset={-50}>
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
        </>
    )
}


export default NavBar