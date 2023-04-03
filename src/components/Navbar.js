import {Link} from 'react-router-dom'

const Navbar = () => {

    const handleClick =  () => {
         fetch('/logout')
    }
    return ( 
        <nav>
            <div id="logo"><h1 id='sun-logo'>SUN</h1><h1 id='shine-logo'>SHINE</h1></div>
            
           
        </nav>
     );
}
 
export default Navbar;
