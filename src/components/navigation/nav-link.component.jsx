import {Link, Outlet} from 'react-router-dom';
import './nav.styles.css';

const NavLink = () => {
    return ( 
        <div className='nav-bar'>
        <nav>
            <h2>Durex</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/signIn'>Sign In</Link></li>
            </ul>
        </nav>
        <Outlet />
      </div>
     );
}
  
export default NavLink;