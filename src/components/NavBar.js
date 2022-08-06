import {BiSearchAlt} from "react-icons/bi";
import logo__nav from "../images/logo__nav.png";
import {Link} from 'react-router-dom';
const NavBar = () =>{

    return(
        <nav className="navBar">
            <div style={{height:'20px',width:'20px'}}></div>
            <Link to="/"><img src={logo__nav}  className="logo__nav"/></Link>
            <BiSearchAlt className="lupa" style={{color:'black',fontSize:'2vw'}}/>
        </nav>
    );
}

export default NavBar;