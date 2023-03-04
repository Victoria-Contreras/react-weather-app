import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <div id="logo"><h1 id='sun-logo'>SUN</h1><h1 id='shine-logo'>SHINE</h1></div>
            <div id="links">
            <Link to="/favorites">Favorites</Link>
            <Link to="/login">Log out</Link>
            </div>
           
        </nav>
     );
}
 
export default Navbar;